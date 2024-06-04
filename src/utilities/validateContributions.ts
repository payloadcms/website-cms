import { Validate } from 'payload/types'

const headers = {
  Accept: 'application/vnd.github.v3+json.html',
  Authorization: `token ${process.env.GITHUB_TOKEN}`,
}

export const validateContributions: Validate = async (value, { siblingData }) => {
  if (siblingData.type === 'discussion') {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: `
      query {
        repository(owner: "payloadcms", name: "${siblingData.repo}) {
          discussion(number: ${value}) {
            title
            url
          }
        }
      }
    `,
      }),
    })
    const { errors } = await res.json()
    if (errors) {
      return 'Invalid discussion number'
    } else {
      return true
    }
  } else if (siblingData.type === 'issue') {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: `
          query {
            repository(owner: "payloadcms", name: "${siblingData.repo}") {
              issue(number: ${value}) {
                title
                url
              }
            }
          }
        `,
      }),
    })
    const { errors } = await res.json()
    if (errors) {
      return 'Invalid issue number'
    } else {
      return true
    }
  } else if (siblingData.type === 'pr') {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: `
          query {
            repository(owner: "payloadcms", name: "${siblingData.repo}") {
              pullRequest(number: ${value}) {
                title
                url
              }
            }
          }
          `,
      }),
    })
    const { errors } = await res.json()
    if (errors) {
      return 'Invalid pull request number'
    } else {
      return true
    }
  }
}
