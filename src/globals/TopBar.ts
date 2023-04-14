import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'

export const TopBar: GlobalConfig = {
  slug: 'top-bar',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'starText',
      label: 'GitHub Star Text',
      type: 'group',
      fields: [
        {
          name: 'desktop',
          type: 'richText',
        },
        {
          name: 'mobile',
          type: 'richText',
        },
      ],
    },
    {
      name: 'announcement',
      type: 'relationship',
      relationTo: 'announcements',
    },
  ],
}
