import type { Payload } from 'payload'

import { formatPagePath } from './formatPagePath'

export const regeneratePage = async ({
  doc,
  collection,
  payload,
}: {
  doc: any // eslint-disable-line @typescript-eslint/no-explicit-any
  collection: string
  payload: Payload
}): Promise<void> => {
  const path = await formatPagePath(collection, doc)

  try {
    const res = await fetch(
      `${process.env.PAYLOAD_PUBLIC_APP_URL}/api/revalidate?secret=${process.env.PAYLOAD_PRIVATE_NEXTJS_REVALIDATION_KEY}&path=${path}`,
    )

    if (res.ok) {
      payload.logger.info(`Revalidated path ${path}`)
    } else {
      payload.logger.error(`Error revalidating path ${path}`)
    }
  } catch (err: unknown) {
    payload.logger.error(`Error hitting revalidate route for ${path}`)
  }
}
