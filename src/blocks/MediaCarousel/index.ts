import { slateEditor } from '@payloadcms/richtext-slate'
import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import link from '../../fields/link'
import linkGroup from '../../fields/linkGroup'

export const MediaCarouselBlock: Block = {
  slug: 'mediaCarouselBlock',
  fields: [
    blockFields({
      name: 'mediaCarouselBlockFields',
      fields: [
        {
          name: 'alignment',
          type: 'select',
          defaultValue: 'contentMediaCarousel',
          options: [
            {
              label: 'Content + Media Carousel',
              value: 'contentMediaCarousel',
            },
            {
              label: 'Media Carousel + Content',
              value: 'mediaCarouselContent',
            },
          ],
          admin: {
            description: 'Choose how to align the content for this block.',
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'leader',
              label: 'Leader Text',
              type: 'text',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
        },
        linkGroup({
          appearances: false,
        }),
        {
          name: 'mediaSlides',
          type: 'array',
          labels: {
            singular: 'Media slide',
            plural: 'Media slides',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            link({
              appearances: false,
            }),
          ],
        },
      ],
    }),
  ],
}
