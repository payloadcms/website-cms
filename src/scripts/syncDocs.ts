import type { PayloadHandler } from 'payload/config'

const syncDocs: PayloadHandler = async (req, res) => {
  const { payload } = req

  try {
    // 1. fetch docs from GitHub (same way we are currently doing on the website repo)
    // 2. check if doc exists in the database
    // 3. if yes, update it
    // 4. if no, create it
    // 5. use success / error banner
  } catch (err: unknown) {
    payload.logger.error(err)
    return res.status(500).json({ error: err })
  }
}

export default syncDocs
