import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'

export const Announcement: GlobalConfig = {
  slug: 'announcement',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'message',
      type: 'richText',
    },
  ],
}
