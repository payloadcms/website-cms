import payload from 'payload'

import { syncToAlgolia } from './collections/CommunityHelp/syncToAlgolia'

// eslint-disable-next-line
require('dotenv').config()

const start = async (): Promise<void> => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    local: true,
  })

  await syncToAlgolia()
  console.log('Synced successfully.')
  process.exit(0)
}

start()
