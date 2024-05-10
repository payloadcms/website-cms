import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const Statement: Block = {
  slug: 'statement',
  labels: {
    singular: 'Statement',
    plural: 'Statements',
  },
  fields: [
    blockFields({
      name: 'statementFields',
      fields: [
        richText({}, { elements: ['h1'] }),
        linkGroup({
          appearances: false,
        }),
        {
          name: 'media',
          label: 'Media',
          type: 'upload',
          relationTo: 'media',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'mediaWidth',
              label: 'Media Width',
              type: 'select',
              defaultValue: 'medium',
              options: [
                {
                  label: 'Small',
                  value: 'small',
                },
                {
                  label: 'Medium',
                  value: 'medium',
                },
                {
                  label: 'Large',
                  value: 'large',
                },
              ],
            },
            {
              name: 'backgroundGlow',
              label: 'Background Glow',
              type: 'select',
              defaultValue: 'none',
              options: [
                {
                  label: 'None',
                  value: 'none',
                },
                {
                  label: 'Colorful',
                  value: 'colorful',
                },
                {
                  label: 'White',
                  value: 'white',
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
}
