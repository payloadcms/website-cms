import { Block } from "payload/types";
import link from "../../fields/link";
import richText from "../../fields/richText";

export const FeatureHighlight: Block = {
  slug: 'featureHighlight',
  fields: [
    {
      name: 'features',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'type',
          type: 'radio',
          defaultValue: 'code',
          options: [
            {
              label: 'Code Block',
              value: 'code',
            },
            {
              label: 'Media',
              value: 'media',
            },
          ],
          admin: {
            layout: 'horizontal',
          }
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          admin: {
            elements: ['link'],
          },
        },
        link({
          appearances: false,
        }),
        {
          name: 'code',
          type: 'code',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData.type === 'code',
          }
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData.type === 'media',
          }
        },
      ]
    }
  ]
}