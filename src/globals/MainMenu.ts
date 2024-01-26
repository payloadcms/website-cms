import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import link from '../fields/link'

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      admin: {
        components: {
          RowLabel: ({ data }) => data.label || '...',
        },
      },
      name: 'tabs',
      type: 'array',
      fields: [
        {
          name: 'label',
          required: true,
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          admin: {
            components: {
              RowLabel: ({ data }) => data.link.label || '...',
            },
          },
          name: 'navItems',
          fields: [
            link({
              overrides: {
                label: false,
              },
              appearances: false,
            }),
            {
              name: 'description',
              type: 'textarea',
            },
          ],
          type: 'array',
        },
      ],
    },
  ],
}
