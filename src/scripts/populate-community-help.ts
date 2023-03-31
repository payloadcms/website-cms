import payload from 'payload'

import { fetchDiscordThreads } from './fetch-discord'
import { fetchGithubDiscussions } from './fetch-github'

// eslint-disable-next-line
require('dotenv').config()

const { PAYLOAD_SECRET, MONGODB_URI } = process.env

const populateCommunityHelp = async (): Promise<void> => {
  const payloadInstance = await payload.init({
    secret: PAYLOAD_SECRET,
    mongoURL: MONGODB_URI,
    local: true,
  })

  try {
    await Promise.all([
      fetchDiscordThreads(payloadInstance),
      fetchGithubDiscussions(payloadInstance),
    ])
  } catch (e: unknown) {
    payload.logger.error(e)
    process.exit(1)
  }

  payload.logger.info('Done!')
  process.exit(0)
}

populateCommunityHelp()
