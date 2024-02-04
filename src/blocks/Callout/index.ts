import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const Callout: Block = {
  slug: 'callout',
  fields: [
    blockFields({
      name: 'calloutFields',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'style',
              type: 'select',
              defaultValue: 'default',
              options: [
                {
                  label: 'Default',
                  value: 'default',
                },
                {
                  label: 'Quote',
                  value: 'quote',
                },
              ],
            },
          ],
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          admin: {
            condition: (_, { style }) => style === 'quote',
          },
        },
        {
          name: 'author',
          type: 'text',
          admin: {
            condition: (_, { style }) => style === 'quote',
          },
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            condition: (_, { style }) => style === 'quote',
          },
        },
        richText({
          admin: {
            condition: (_, { style }) => style === 'default',
          },
        }),
        linkGroup({
          appearances: false,
          overrides: {
            admin: {
              condition: (_, { style }) => style === 'default',
            },
          },
        }),
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    }),
  ],
}
