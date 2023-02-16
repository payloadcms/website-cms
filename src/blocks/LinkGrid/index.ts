import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'

export const LinkGrid: Block = {
  slug: 'linkGrid',
  fields: [
    blockFields({
      name: 'linkGridFields',
      fields: [
        linkGroup({
          appearances: false,
        }),
      ],
    }),
  ],
}
