import { Block } from "payload/types";

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    {
      name: 'position',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Wide',
          value: 'wide',
        }
      ]
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      admin: {
        elements: [
          'link',
        ]
      }
    }
  ]
}