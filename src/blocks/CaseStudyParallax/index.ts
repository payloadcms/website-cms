import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'

export const CaseStudyParallax: Block = {
  slug: 'caseStudyParallax',
  labels: {
    singular: 'Case Study Parallax',
    plural: 'Case Study Parallax',
  },
  fields: [
    blockFields({
      name: 'caseStudyParallaxFields',
      fields: [
        {
          name: 'cards',
          type: 'array',
          fields: [
            {
              name: 'tabLabel',
              type: 'text',
              required: true,
            },
            {
              name: 'quote',
              type: 'textarea',
              required: true,
            },
            {
              name: 'author',
              type: 'text',
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'previewImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'caseStudy',
              type: 'relationship',
              relationTo: 'case-studies',
              required: true,
            },
          ],
        },
      ],
    }),
  ],
}
