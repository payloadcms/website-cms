import express from 'express'
import nodemailerSendgrid from 'nodemailer-sendgrid'
import payload from 'payload'

import { syncToAlgoliaCron } from './collections/CommunityHelp/syncToAlgolia'

// eslint-disable-next-line
require('dotenv').config()

const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const sendGridAPIKey = process.env.SENDGRID_API_KEY

const sendgridConfig = {
  transportOptions: nodemailerSendgrid({
    apiKey: sendGridAPIKey,
  }),
}

const start = async (): Promise<void> => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    email: {
      fromName: 'Payload CMS',
      fromAddress: 'info@payloadcms.com',
      ...sendgridConfig,
    },
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(process.env.PORT, async () => {
    payload.logger.info(`Server listening on port ${process.env.PORT}`)
  })

  syncToAlgoliaCron.start()
}

start()
