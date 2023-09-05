import type { Field } from 'payload/types'

const logoGroup: Field = {
  name: 'logoGroup',
  type: 'group',
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Label',
    },
    {
      name: 'logos',
      type: 'array',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
  admin: {
    hideGutter: true,
    condition: (_, { type }) => type === 'centeredCarousel',
  },
}

export default logoGroup
