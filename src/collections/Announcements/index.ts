import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../../access/isAdmin'

export const Announcements: CollectionConfig = {
  slug: 'announcements',
  access: {
    read: () => true,
    update: isAdmin,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        elements: ['link'],
        leaves: ['bold', 'italic', 'underline'],
      },
    },
  ],
}
