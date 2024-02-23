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
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        richText(),
        linkGroup({
          appearances: false,
        }),
      ],
    }),
  ],
}
