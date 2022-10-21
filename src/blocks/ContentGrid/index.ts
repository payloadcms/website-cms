import { Block } from "payload/types";

export const ContentGrid: Block = {
  slug: 'contentGrid',
  fields: [
    {
      name: 'content',
      type: 'array',
      fields: [
        {
          name: 'forceDarkBackground',
          type: 'checkbox',
          admin: {
            description: 'Check this box to force this block to have a dark background.'
          }
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          admin: {
            elements: [
              'link',
              'h4',
            ],
          },
        },
      ]
    },
  ]
}