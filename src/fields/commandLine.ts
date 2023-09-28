import type { Field } from 'payload/types'

const commandLine: Field = {
  name: 'commandLine',
  type: 'text',
  admin: {
    condition: (_, { type }) => type === 'centeredCarousel',
  },
  label: 'Command Line',
}

export default commandLine
