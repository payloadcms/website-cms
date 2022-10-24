import { formatPagePath } from './formatPagePath';

export const formatPreviewURL = (collection: string, doc: any): string => {
  return `${process.env.PAYLOAD_PUBLIC_APP_URL}/api/preview?url=${formatPagePath(collection, doc)}`
}
