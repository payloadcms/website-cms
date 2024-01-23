import { slateEditor } from '@payloadcms/richtext-slate'
import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import link from '../../fields/link'
import linkGroup from '../../fields/linkGroup'

export const MediaProgressGallery: Block = {
  slug: 'MediaProgressGallery',
  fields: [
    blockFields({
      name: 'mediaProgressGalleryFields',
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
          name: 'mediaTabs',
          type: 'array',
          labels: {
            singular: 'Media tab',
            plural: 'Media tabs',
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
