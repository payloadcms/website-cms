import type { Field } from 'payload/types'

const commandLine: Field = {
  name: 'commandLine',
  type: 'group',
  admin: {
    hideGutter: true,
    condition: (_, { type }) => type === 'centeredCarousel',
  },
  fields: [
    {
      name: 'command',
      type: 'text',
      label: 'Command',
    },
  ],
}

export default commandLine
