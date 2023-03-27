// @ts-check
/* eslint-disable @typescript-eslint/no-unused-vars, no-console, no-underscore-dangle, no-use-before-define */
import { Bar } from 'cli-progress'
import { ChannelType, Client, Events, GatewayIntentBits } from 'discord.js'
import DiscordMarkdown from 'discord-markdown'
import dotenv from 'dotenv'
import path from 'path'
import payload from 'payload'
import { fileURLToPath } from 'url'

function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

const { toHTML } = DiscordMarkdown

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

const { DISCORD_TOKEN, DISCORD_SCRAPE_CHANNEL_ID, PAYLOAD_SECRET, MONGODB_URI } = process.env

if (!DISCORD_TOKEN) {
  throw new Error('DISCORD_TOKEN is required')
}
if (!DISCORD_SCRAPE_CHANNEL_ID) {
  throw new Error('DISCORD_SCRAPE_CHANNEL_ID is required')
}

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] })

const tagMap = {
  answered: '1034538089546264577',
  unanswered: '1043188477002526750',
  stale: '1052600637898096710',
}

client.once(Events.ClientReady, async c => {
  await payload.init({
    // @ts-ignore
    secret: PAYLOAD_SECRET,
    // @ts-ignore
    mongoURL: MONGODB_URI,
    local: true,
  })

  console.log(`Ready! Logged in as ${c.user.tag}`)

  // Get the community help channel
  const communityHelpChannel = client.channels.cache.get(DISCORD_SCRAPE_CHANNEL_ID)
  if (!communityHelpChannel) {
    console.log(`No channel found with id ${DISCORD_SCRAPE_CHANNEL_ID}`)
    return
  }

  if (communityHelpChannel.type !== ChannelType.GuildForum) {
    console.log('Not a GuildForum')
    return
  }

  // Fetches a max limit of 100 archived threads
  const fetchedArchivedThreads = await communityHelpChannel.threads.fetchArchived({
    limit: 100,
    fetchAll: true,
  })

  const { threads: archiveThreads } = fetchedArchivedThreads

  const fetchedActiveThreads = await communityHelpChannel.threads.fetchActive()
  const { threads: activeThreads } = fetchedActiveThreads

  // Combines active threads with archived threads
  let threads = activeThreads.concat(archiveThreads)

  const allThreads = threads.map(async info => {
    return info
  })

  const progress = new Bar({
    format: 'Fetching messages [{bar}] {percentage}% | {value}/{total}',
  })

  progress.start(allThreads.length, 0)

  const formattedThreads = await mapAsync(allThreads, async t => {
    const info = await t

    progress.increment()

    // Filter out all threads that are not marked as unanswered
    if (info.appliedTags.includes(tagMap.unanswered)) return null

    const messages = await info.messages.fetch()

    const [intro, ...combinedResponses] = messages.reverse().reduce((acc, message) => {
      const prevMessage = acc[acc.length - 1]
      let newAuthor = true

      if (prevMessage) {
        // should combine with prev message - same author
        if (prevMessage.author.id === message.author.id) {
          prevMessage.content += `\n \n ${message.content}`
          newAuthor = false
        }
      }

      if (newAuthor) {
        acc.push(message)
      }

      return acc
    }, [])

    return {
      info: {
        name: info.name,
        id: info.id,
        guildId: info.guildId,
        createdAt: info.createdTimestamp,
        archived: info.archived,
      },
      intro: {
        content: toHTML(intro.cleanContent),
        fileAttachments: intro.attachments,
        authorID: intro.author.id,
        authorName: intro.author.username,
        authorAvatar: intro.author.avatar,
        createdAtDate: intro.createdTimestamp,
      },
      messages: combinedResponses.map(m => {
        const { createdTimestamp, cleanContent, author, attachments } = m
        return {
          content: toHTML(cleanContent),
          fileAttachments: JSON.parse(JSON.stringify(attachments, null)),
          authorID: author.id,
          authorName: author.username,
          authorAvatar: author.avatar,
          createdAtDate: createdTimestamp,
        }
      }),
      messageCount: info.messageCount,
      slug: slugify(info.name),
    }
  })
  console.log('\n\n')

  await Promise.all(
    formattedThreads.map(async (thread, i) => {
      if (thread) {
        // Check if thread exists, if it does update existing thread else add thread to collection
        const existingThread = await payload.find({
          collection: 'community-help',
          where: { discordID: { equals: thread.info.id } },
          limit: 1,
          depth: 0,
        })

        const threadExists =
          existingThread.docs[0]?.communityHelpJSON?.info?.id === thread?.info?.id

        if (threadExists) {
          await payload.update({
            collection: 'community-help',
            id: existingThread.docs[0]?.id,
            data: {
              communityHelpJSON: thread,
            },
            depth: 0,
          })
        } else {
          await payload.create({
            collection: 'community-help',
            data: {
              title: thread?.info?.name,
              communityHelpType: 'discord',
              discordID: thread?.info?.id,
              communityHelpJSON: thread,
              slug: thread?.slug,
            },
          })
        }
      }
    }),
  )

  process.exit(0)
})

client.login(process.env.DISCORD_TOKEN)

async function mapAsync(arr, callbackfn) {
  return Promise.all(arr.map(callbackfn))
}
