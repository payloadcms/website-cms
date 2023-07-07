import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'

export const Docs: CollectionConfig = {
  slug: 'docs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['topic', 'slug', 'title', 'order'],
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
      name: 'topic',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
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
      type: 'textarea',
    },
  ],
}
