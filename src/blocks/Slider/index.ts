import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import richText from '../../fields/richText'

export const Slider: Block = {
  slug: 'slider',
  fields: [
    blockFields({
      name: 'sliderFields',
      fields: [
        {
          name: 'useLeadingHeader',
          label: 'Use Leading Header',
          type: 'checkbox',
        },
        richText({
          name: 'leadingHeader',
          label: 'Leading Header',
          admin: {
            condition: (_, siblingData) => siblingData.useLeadingHeader,
          },
        }),
        {
          type: 'select',
          name: 'sliderType',
          required: true,
          options: [
            {
              label: 'Quote Slider',
              value: 'quoteSlider',
            },
            {
              label: 'Image Slider',
              value: 'imageSlider',
            },
          ],
        },
        {
          type: 'array',
          name: 'imageSlides',
          required: true,
          minRows: 3,
          admin: {
            condition: (_, siblingData) => siblingData.sliderType === 'imageSlider',
          },
          fields: [
            {
              type: 'upload',
              name: 'image',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          type: 'array',
          name: 'quoteSlides',
          required: true,
          minRows: 3,
          admin: {
            condition: (_, siblingData) => siblingData.sliderType === 'quoteSlider',
          },
          fields: [
            {
              type: 'text',
              name: 'leader',
            },
            {
              type: 'textarea',
              name: 'quote',
              required: true,
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'text',
                  name: 'author',
                  required: true,
                },
                {
                  type: 'text',
                  name: 'role',
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
}
