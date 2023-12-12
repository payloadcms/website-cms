import { slateEditor } from '@payloadcms/richtext-slate'
import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import richText from '../../fields/richText'
import label from '../../fields/richText/label'

export const ContentGrid: Block = {
  slug: 'contentGrid',
  fields: [
    blockFields({
      name: 'contentGridFields',
      fields: [
        {
          name: 'forceDarkBackground',
          type: 'checkbox',
          admin: {
            description: 'Check this box to force this block to have a dark background.',
          },
        },
        {
          name: 'useLeadingHeader',
          label: 'Use Leading Header',
          type: 'checkbox',
        },
        richText({
          name: 'leadingHeader',
          label: 'Leading Header',
          admin: {
            condition: (_, siblingData) => siblingData.useLeadingHeader,
          },
        }),
        {
          name: 'cells',
          type: 'array',
          fields: [
            {
              name: 'content',
              type: 'richText',
              required: true,
              editor: slateEditor({
                admin: {
                  elements: ['link', 'h4', 'h5', label, 'upload'],
                },
              }),
            },
          ],
        },
      ],
    }),
  ],
}
