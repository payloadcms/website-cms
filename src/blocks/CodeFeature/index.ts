import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const CodeFeature: Block = {
  slug: 'codeFeature',
  fields: [
    blockFields({
      name: 'codeFeatureFields',
      fields: [
        {
          name: 'forceDarkBackground',
          type: 'checkbox',
          admin: {
            description: 'Check this box to force this block to have a dark background.',
          },
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        richText(undefined, {
          elements: ['ul', 'ol', 'link'],
        }),
        linkGroup({
          appearances: false,
        }),
        {
          name: 'codeBlocks',
          type: 'array',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'language',
                  type: 'select',
                  defaultValue: 'none',
                  options: [
                    {
                      label: 'None',
                      value: 'none',
                    },
                    {
                      label: 'JavaScript',
                      value: 'js',
                    },
                    {
                      label: 'TypeScript',
                      value: 'ts',
                    },
                  ],
                },
                {
                  name: 'label',
                  label: 'Code Label',
                  type: 'text',
                },
              ],
            },
            {
              name: 'code',
              type: 'code',
              required: true,
            },
          ],
        },
      ],
    }),
  ],
}
