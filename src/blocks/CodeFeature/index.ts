import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import link from '../../fields/link'
import richText from '../../fields/richText'

export const CodeFeature: Block = {
  slug: 'codeFeature',
  fields: [
    blockFields({
      name: 'codeFeatureFields',
      fields: [
        {
          name: 'disableBlockSpacing',
          type: 'checkbox',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        richText({
          admin: {
            elements: ['ul', 'ol', 'link'],
          },
        }),
        {
          name: 'enableLink',
          type: 'checkbox',
        },
        link({
          overrides: {
            admin: {
              condition: (_, { enableLink }) => Boolean(enableLink),
            },
          },
        }),
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
    }),
  ],
}
