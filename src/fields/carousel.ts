import type { Field } from 'payload/types'

const carousel: Field = {
  name: 'carousel',
  type: 'array',
  minRows: 3,
  maxRows: 7,
  labels: {
    singular: 'Slide',
    plural: 'Slides',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  admin: {
    condition: (_, { type }) => type === 'centeredCarousel',
  },
}

export default carousel
