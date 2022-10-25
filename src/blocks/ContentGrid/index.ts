import { Block } from "payload/types";
import { blockFields } from "../../fields/blockFields";

export const ContentGrid: Block = {
  slug: 'contentGrid',
  fields: [
    blockFields({
      name: 'contentGridFields',
      fields: [
        {
          name: 'contentGridFields',
          type: 'group',
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
        },
      ]
    })
  ]
}