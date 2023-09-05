import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import { publishedOnly } from '../access/publishedOnly'
import { CallToAction } from '../blocks/CallToAction'
import { CardGrid } from '../blocks/CardGrid'
import { CaseStudiesHighlight } from '../blocks/CaseStudiesHighlight'
import { CaseStudyCards } from '../blocks/CaseStudyCards'
import { CodeFeature } from '../blocks/CodeFeature'
import { Content } from '../blocks/Content'
import { ContentGrid } from '../blocks/ContentGrid'
import { ExampleTabs } from '../blocks/ExampleTabs'
import { Form } from '../blocks/Form'
import { HoverHighlights } from '../blocks/HoverHighlights'
import { LinkGrid } from '../blocks/LinkGrid'
import { MediaBlock } from '../blocks/Media'
import { MediaContent } from '../blocks/MediaContent'
import { Pricing } from '../blocks/Pricing'
import { ReusableContent } from '../blocks/ReusableContent'
import { Slider } from '../blocks/Slider'
import { Steps } from '../blocks/Steps'
import { StickyHighlights } from '../blocks/StickyHighlights'
import { fullTitle } from '../fields/fullTitle'
import { hero } from '../fields/hero'
import { slugField } from '../fields/slug'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { revalidatePage } from '../utilities/revalidatePage'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'fullTitle',
    preview: doc => formatPreviewURL('pages', doc),
    defaultColumns: ['fullTitle', 'slug', 'createdAt', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  access: {
    create: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    afterChange: [
      ({ req: { payload }, doc }) => {
        revalidatePage({
          payload,
          collection: 'pages',
          doc,
        })
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    fullTitle,
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [hero],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [
                CallToAction,
                CardGrid,
                CaseStudyCards,
                CaseStudiesHighlight,
                CodeFeature,
                Content,
                ContentGrid,
                Form,
                HoverHighlights,
                LinkGrid,
                MediaBlock,
                MediaContent,
                Pricing,
                ReusableContent,
                Slider,
                Steps,
                StickyHighlights,
                ExampleTabs,
              ],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
