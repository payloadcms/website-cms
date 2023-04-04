import algoliasearch from 'algoliasearch'
import cron from 'node-cron'
import payload from 'payload'

import { fetchDiscordThreads } from '../../scripts/fetch-discord'
import { fetchGithubDiscussions } from '../../scripts/fetch-github'

const appID = process.env.ALGOLIA_CH_ID
const apiKey = process.env.ALGOLIA_API_KEY
const indexName = process.env.ALGOLIA_CH_INDEX_NAME

const client = algoliasearch(appID, apiKey)

const index = client.initIndex(indexName)

const cronOptions: cron.ScheduleOptions = {
  timezone: 'America/Detroit',
  scheduled: false,
}

interface DiscordDoc {
  objectID: string
  platform: 'Discord' | 'Github'
  name: string
  createdAt: string
  author: string
  messages: unknown[]
  messageCount: number
  slug: string
}

interface GithubDoc {
  objectID: string
  platform: 'Discord' | 'Github'
  name: string
  description: string
  upvotes: number
  createdAt: string
  author: string
  comments: unknown[]
  messageCount: number
  slug: string
}

export const syncToAlgolia = async (): Promise<void> => {
  console.log('RUNNING')
  await fetchDiscordThreads(payload)
  await fetchGithubDiscussions(payload)

  const { docs } = await payload.find({
    collection: 'community-help',
    limit: 0,
  })

  const discordDocs: DiscordDoc[] = []
  const githubDocs: GithubDoc[] = []

  docs.forEach(doc => {
    const { communityHelpJSON, discordID, githubID } = doc
    if (discordID) {
      const { info, intro, slug, messageCount, messages } = communityHelpJSON as any

      discordDocs.push({
        objectID: info.id,
        platform: 'Discord',
        name: info.name,
        createdAt: info.createdAt,
        author: intro.authorName,
        messages: messages.map(message => {
          return {
            author: message.authorName,
            content: message.content,
          }
        }),
        messageCount: messageCount,
        slug,
      })
    }

    if (githubID) {
      const { id, title, body, author, createdAt, commentTotal, upvotes, slug, comments } =
        communityHelpJSON as any

      githubDocs.push({
        objectID: id,
        platform: 'Github',
        name: title,
        description: body,
        createdAt,
        messageCount: commentTotal,
        upvotes,
        author: author.name,
        slug,
        comments: (comments || []).map(comment => {
          const replies = comment.replies?.map(reply => {
            return {
              author: reply.author.name,
              content: reply.body,
            }
          })

          return {
            author: comment.author.name,
            content: comment.body,
            replies: replies || [],
          }
        }),
      })
    }
  })

  const records = [...discordDocs, ...githubDocs]

  await index.saveObjects(records).wait()
}

const schedule = '0 1 * * *' // 1am
export const syncToAlgoliaCron = cron.schedule(schedule, syncToAlgolia, cronOptions)
