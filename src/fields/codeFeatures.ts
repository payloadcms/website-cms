import type { Field } from 'payload/types'
import richText from './richText'

const codeFeatures: Field = {
  name: 'codeFeatures',
  type: 'array',
  labels: {
    singular: 'Feature',
    plural: 'Features',
  },
  fields: [
    {
      name: 'row',
      type: 'number',
      required: true,
    },
    richText({ name: 'feature', required: true }),
  ],
}

export default codeFeatures
