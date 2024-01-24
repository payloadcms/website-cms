import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'

export const FeaturedMediaGallery: Block = {
  slug: 'featuredMediaGallery',
  fields: [
    blockFields({
      name: 'featuredMediaGalleryFields',
      fields: [
        {
          name: 'alignment',
          type: 'select',
          defaultValue: 'contentMediaGallery',
          options: [
            {
              label: 'Content + Media Gallery',
              value: 'contentMediaGallery',
            },
            {
              label: 'Media Gallery + Content',
              value: 'mediaGalleryContent',
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
          name: 'featuredMediaTabs',
          type: 'array',
          labels: {
            singular: 'Featured media tab',
            plural: 'Featured media tabs',
          },
          fields: [
            {
              name: 'imageLabel',
              type: 'text',
              required: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    }),
  ],
}