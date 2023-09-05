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
      type: 'row',
      fields: [
        {
          name: 'command',
          type: 'text',
          label: 'Command',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'appearance',
          type: 'select',
          label: 'Appearance',
          admin: {
            width: '50%',
          },
          defaultValue: 'default',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Minimal',
              value: 'minimal',
            },
          ],
        },
      ],
    },
  ],
}

export default commandLine
