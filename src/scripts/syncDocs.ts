/* eslint-disable @typescript-eslint/explicit-function-return-type */
import dotenv from 'dotenv'
import matter from 'gray-matter'
import fetch from 'node-fetch'
import type { PayloadHandler } from 'payload/config'

import type { Doc } from '../payload-types'
// import remarkGfm from 'remark-gfm'
// import { serialize } from 'next-mdx-remote/serialize'

dotenv.config()

const decodeBase64 = (
  string: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: 'string'): string },
) => {
  const buff = Buffer.from(string, 'base64')
  return buff.toString('utf8')
}

function slugify(string: { toString: () => string }) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, (c: string) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

const githubAPI = 'https://api.github.com/repos/payloadcms/payload'

const topicOrder = [
  'Getting-Started',
  'Configuration',
  'Fields',
  'Admin',
  'Access-Control',
  'Hooks',
  'Authentication',
  'Versions',
  'Upload',
  'GraphQL',
  'REST-API',
  'Local-API',
  'Queries',
  'Production',
  'Email',
  'TypeScript',
  'Plugins',
  'Integrations',
  'Cloud',
]

const headers = {
  Accept: 'application/vnd.github.v3+json.html',
  Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
}

function getHeadings(source: string) {
  const headingLines = source.split('\n').filter((line: string) => {
    return line.match(/^#{1,3}\s.+/gm)
  })

  return headingLines.map((raw: string) => {
    const text = raw.replace(/^###*\s/, '')
    const level = raw.slice(0, 3) === '###' ? 3 : 2
    return { text, level, id: slugify(text) }
  })
}

const syncDocs: PayloadHandler = async (req, res) => {
  const { payload } = req

  try {
    if (!process.env.GITHUB_ACCESS_TOKEN) {
      console.log('No GitHub access token found - skipping docs retrieval') // eslint-disable-line no-console
      process.exit(0)
    }

    const fetchDoc = async (topicSlug: string, docFilename: string): Promise<Doc> => {
      const json = await fetch(`${githubAPI}/contents/docs/${topicSlug}/${docFilename}`, {
        headers,
      }).then(response => response.json())

      const parsedDoc = matter(decodeBase64(json.content))

      const doc: Doc = {
        // content: serialize(parsedDoc.content, {
        //   mdxOptions: {
        //     remarkPlugins: [remarkGfm],
        //   },
        // }),
        content: parsedDoc.content,
        title: parsedDoc.data.title,
        topic: topicSlug,
        slug: docFilename.replace('.mdx', ''),
        label: parsedDoc.data.label,
        order: parsedDoc.data.order,
        description: parsedDoc.data.desc || '',
        keywords: parsedDoc.data.keywords || '',
        headings: await getHeadings(parsedDoc.content),
        id: '',
        updatedAt: '',
        createdAt: '',
      }

      return doc
    }

    const processDoc = async (doc: Doc) => {
      const existingDocs = await payload.find({
        collection: 'docs',
        where: {
          topic: { equals: doc.topic },
          slug: { equals: doc.slug },
        },
      })
      if (existingDocs.totalDocs === 1) {
        await payload.update({
          collection: 'docs',
          data: doc,
          where: {
            id: { equals: existingDocs.docs[0]._id },
          },
        })
      } else if (existingDocs.totalDocs === 0) {
        await payload.create({
          collection: 'docs',
          data: doc,
        })
      } else if (existingDocs.totalDocs > 1) {
        payload.logger.error(
          `Found ${existingDocs.totalDocs} documents with identical topic and slug: ${doc.topic} ${doc.slug}`,
        )
      }
    }

    const processAllDocs = async (finalDocs: Doc[][]) => {
      for (const docs of finalDocs) {
        await Promise.all(docs.map(processDoc))
      }
    }

    const allDocs = await Promise.all(
      topicOrder.map(async unsanitizedTopicSlug => {
        const topicSlug = unsanitizedTopicSlug.toLowerCase()

        const docs = await fetch(`${githubAPI}/contents/docs/${topicSlug}`, {
          headers,
        }).then(response => response.json())

        const docFilenames = docs.map(({ name }) => name)

        const parsedDocs = await Promise.all(
          docFilenames.map(docFilename => fetchDoc(topicSlug, docFilename)),
        )

        return parsedDocs
      }),
    )

    await processAllDocs(allDocs)

    return res.status(200).json({ success: true })
  } catch (err: unknown) {
    payload.logger.error(err)
    return res.status(500).json({ success: false })
  }
}

export default syncDocs
