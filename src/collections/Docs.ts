import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'

export const Docs: CollectionConfig = {
  slug: 'docs',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: isAdmin,
    read: () => true,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'topicSlug',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'docs',
      type: 'group',
      admin: {
        readOnly: true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'order',
          type: 'number',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'keywords',
          type: 'text',
        },
        {
          name: 'headings',
          type: 'json',
        },
        {
          name: 'content',
          type: 'group',
          fields: [
            {
              name: 'compiledSource',
              type: 'textarea',
            },
          ],
        },
      ],
    },
  ],
}
