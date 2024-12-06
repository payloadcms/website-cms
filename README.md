# Payload Website CMS

## 🚨 All functionality moved to [payloadcms/website](https://github.com/payloadcms/website)

This is the code that powers the official website CMS for [Payload](https://github.com/payloadcms/payload). The frontend is built with NextJS and [the code can be found here](https://github.com/payloadcms/website).

### Features shown

This CMS showcases many powerful features that Payload is capable of, including:

1. [Collections](https://payloadcms.com/docs/configuration/collections) and [Globals](https://payloadcms.com/docs/configuration/globals)
1. [Access Control](https://payloadcms.com/docs/access-control/overview) to restrict who can do what to the site's data
1. [Versions](https://payloadcms.com/docs/versions/overview) and [Drafts](https://payloadcms.com/docs/versions/drafts) functionality
1. A great pattern for how to create [reusable fields](https://github.com/payloadcms/website-cms/tree/master/src/fields) that can be used and re-used easily
1. Many advanced field types, including the [relationship](https://payloadcms.com/docs/fields/relationship), [blocks](https://payloadcms.com/docs/fields/blocks), [array](https://payloadcms.com/docs/fields/array), and many more
1. The official [Payload SEO plugin](https://github.com/payloadcms/plugin-seo)
1. The official [Payload Form Builder plugin](https://github.com/payloadcms/plugin-form-builder)
1. Auto-generated [TypeScript types](https://github.com/payloadcms/public-demo/blob/master/src/payload-types.ts)
1. Lots more

### Running locally

You can clone this repo to your own computer and play around super easily.

To do so, you'll need the following software:

- Yarn or NPM
- NodeJS version 10+
- A Mongo Database - **IMPORTANT: you need to either have MongoDB running locally, or have signed up for a free MongoDB Atlas server in order to test this repo locally.**

##### Local installation steps:

**1. Clone the repo by running the following command at your terminal:**

```bash
git clone git@github.com:payloadcms/website-cms.git
```

**Navigate to the folder and install dependencies**

Type `cd ./website-cms` and then `yarn` or `npm install --legacy-peer-deps` to add all required dependencies.

**Duplicate the example `.env` file and fill in your own values**

Type `cp .env.example .env` in your terminal to make a copy of the example `.env` file, and then edit that file to fill in your own values.


**Fire up the development server**

Finally, type `yarn dev` to start up the server and see it in action!

### Connect your local cms to the Payload website

Update NEXT_PUBLIC_CMS_URL in payload website `.env` file 

```
NEXT_PUBLIC_CMS_URL=http://cms.local.payloadcms.com:8000
```

### Hosts file

The locally running app must run on `cms.local.payloadcms.com:8000` because of http-only cookie policies and how the GitHub App redirects the user back to the site after authenticating. To do this, you'll need to add the following to your hosts file:

```
127.0.0.1 cms.local.payloadcms.com
```

> On Mac you can find the hosts file at `/etc/hosts`. On Windows, it's at `C:\Windows\System32\drivers\etc\hosts`:

