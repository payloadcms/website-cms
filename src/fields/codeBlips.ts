import type { Field } from 'payload/types'
import richText from './richText'

const codeBlips: Field = {
  name: 'codeBlips',
  type: 'array',
  labels: {
    singular: 'Blip',
    plural: 'Blips',
  },
  fields: [
    {
      name: 'row',
      type: 'number',
      required: true,
    },
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    richText({ name: 'feature', required: true }),
  ],
}

export default codeBlips
