import { slateEditor } from '@payloadcms/richtext-slate'
import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import richText from '../../fields/richText'
import label from '../../fields/richText/label'
import linkGroup from '../../fields/linkGroup'

export const ContentGrid: Block = {
  slug: 'contentGrid',
  fields: [
    blockFields({
      name: 'contentGridFields',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'style',
              label: 'Style',
              type: 'select',
              defaultValue: 'gridBelow',
              options: [
                { value: 'gridBelow', label: 'Grid Below' },
                { value: 'sideBySide', label: 'Side by Side' },
              ],
            },
            {
              name: 'showNumbers',
              type: 'checkbox',
            },
          ],
        },
        richText({
          name: 'content',
          label: 'Content',
          required: false,
        }),
        linkGroup({
          appearances: false,
          overrides: {},
        }),
        {
          name: 'cells',
          type: 'array',
          minRows: 1,
          maxRows: 8,
          fields: [
            {
              name: 'content',
              type: 'richText',
              required: true,
              editor: slateEditor({
                admin: {
                  elements: ['link', 'h4', 'h5', label],
                },
              }),
            },
          ],
        },
      ],
    }),
  ],
}
