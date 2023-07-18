import algoliasearch from 'algoliasearch'

const appID = process.env.ALGOLIA_CH_ID || ''
const apiKey = process.env.ALGOLIA_API_KEY || ''
const indexName = process.env.ALGOLIA_CH_INDEX_NAME || ''

const client = algoliasearch(appID, apiKey)

const index = client.initIndex(indexName)

export const removeFromAlgolia = async (id: string): Promise<void> => {
  await index.deleteObject(id).then(() => {
    // eslint-disable-next-line no-console
    console.log('Deleted objectID ' + id + ' from Algolia')
  })
}
