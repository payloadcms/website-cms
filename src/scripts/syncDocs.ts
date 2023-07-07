/* eslint-disable @typescript-eslint/explicit-function-return-type */
import dotenv from 'dotenv'
import matter from 'gray-matter'
import fetch from 'node-fetch'
import type { PayloadHandler } from 'payload/config'
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

async function getHeadings(source: string) {
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
    // 1. fetch docs from GitHub (same way we are currently doing on the website repo)
    // 2. check if doc exists in the database
    // 3. if yes, update it
    // 4. if no, create it
    // 5. use success / error banner
    if (!process.env.GITHUB_ACCESS_TOKEN) {
      console.log('No GitHub access token found - skipping docs retrieval') // eslint-disable-line no-console
      process.exit(0)
    }

    const allDocs = await Promise.all(
      topicOrder.map(async unsanitizedTopicSlug => {
        const topicSlug = unsanitizedTopicSlug.toLowerCase()

        const docs = await fetch(`${githubAPI}/contents/docs/${topicSlug}`, {
          headers,
        }).then(response => response.json())

        const docFilenames = docs.map(({ name }) => name)

        const parsedDocs = await Promise.all(
          docFilenames.map(async (docFilename: string) => {
            const json = await fetch(`${githubAPI}/contents/docs/${topicSlug}/${docFilename}`, {
              headers,
            }).then(response => response.json())

            const parsedDoc = matter(decodeBase64(json.content))

            const doc = {
              // I can't get this to work with next-mdx-remote, maybe we can serialize on the frontend when we render idk
              // content: serialize(parsedDoc.content, {
              //   mdxOptions: {
              //     remarkPlugins: [remarkGfm],
              //   },
              // }),
              content: parsedDoc.content,
              title: parsedDoc.data.title,
              topic: unsanitizedTopicSlug,
              slug: docFilename.replace('.mdx', ''),
              label: parsedDoc.data.label,
              order: parsedDoc.data.order,
              description: parsedDoc.data.desc || '',
              keywords: parsedDoc.data.keywords || '',
              headings: await getHeadings(parsedDoc.content),
            }

            return doc
          }),
        )

        return parsedDocs
      }),
    )

    allDocs.forEach(async (docs: any) => {
      docs.forEach(async (doc: any) => {
        const existingDoc = await payload.find({
          collection: 'docs',
          where: {
            topic: { equals: doc.topic },
            slug: { equals: doc.slug },
          },
        })

        if (existingDoc.totalDocs > 1) {
          throw new Error(
            `Found ${existingDoc.totalDocs} documents with the same slug: ${doc.slug} in topic: ${doc.topic}`,
          )
        }
        if (existingDoc.totalDocs === 1) {
          await payload.update({
            collection: 'docs',
            data: doc,
            where: {
              id: { equals: existingDoc.docs[0]._id },
            },
          })
        } else {
          await payload.create({
            collection: 'docs',
            data: doc,
          })
        }
      })
    })
  } catch (err: unknown) {
    payload.logger.error(err)
    return res.status(500).json({ error: err })
  }
}

export default syncDocs
