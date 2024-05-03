import { GlobalConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

import linkGroup from '../fields/linkGroup'
import { Callout } from '../blocks/Callout'
import { CallToAction } from '../blocks/CallToAction'
import { CardGrid } from '../blocks/CardGrid'
import { CaseStudiesHighlight } from '../blocks/CaseStudiesHighlight'
import { CaseStudyCards } from '../blocks/CaseStudyCards'
import { CaseStudyParallax } from '../blocks/CaseStudyParallax'
import { CodeFeature } from '../blocks/CodeFeature'
import { Content } from '../blocks/Content'
import { ContentGrid } from '../blocks/ContentGrid'
import { ExampleTabs } from '../blocks/ExampleTabs'
import { Form } from '../blocks/Form'
import { HoverCards } from '../blocks/HoverCards'
import { HoverHighlights } from '../blocks/HoverHighlights'
import { LinkGrid } from '../blocks/LinkGrid'
import { LogoGrid } from '../blocks/LogoGrid'
import { MediaBlock } from '../blocks/Media'
import { MediaContent } from '../blocks/MediaContent'
import { Pricing } from '../blocks/Pricing'
import { ReusableContent } from '../blocks/ReusableContent'
import { Slider } from '../blocks/Slider'
import { Steps } from '../blocks/Steps'
import { StickyHighlights } from '../blocks/StickyHighlights'
import { Statement } from '../blocks/Statement'
import { MediaContentAccordion } from '../blocks/MediaContentAccordion'

export const PartnerProgram: GlobalConfig = {
  slug: 'partner-program',
  label: 'Program Page',
  admin: {
    group: 'Agency Partner Program',
  },
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'richText',
          type: 'richText',
          label: 'Hero Text',
        },
        linkGroup({
          overrides: {
            name: 'breadcrumbBarLinks',
          },
          appearances: false,
        }),
        linkGroup({
          overrides: {
            name: 'heroLinks',
          },
          appearances: false,
        }),
      ],
    },
    {
      name: 'featuredPartners',
      type: 'group',
      fields: [
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'partners',
          type: 'relationship',
          relationTo: 'partners',
          hasMany: true,
          required: true,
          minRows: 4,
          maxRows: 4,
        },
      ],
    },
    {
      name: 'contentBlocks',
      type: 'group',
      label: 'Content Blocks',
      fields: [
        {
          name: 'beforeDirectory',
          type: 'blocks',
          blocks: [
            Callout,
            CallToAction,
            CardGrid,
            CaseStudyCards,
            CaseStudiesHighlight,
            CaseStudyParallax,
            CodeFeature,
            Content,
            ContentGrid,
            Form,
            HoverCards,
            HoverHighlights,
            LinkGrid,
            LogoGrid,
            MediaBlock,
            MediaContent,
            MediaContentAccordion,
            Pricing,
            ReusableContent,
            Slider,
            Statement,
            Steps,
            StickyHighlights,
            ExampleTabs,
          ],
        },
        {
          name: 'afterDirectory',
          type: 'blocks',
          blocks: [
            Callout,
            CallToAction,
            CardGrid,
            CaseStudyCards,
            CaseStudiesHighlight,
            CaseStudyParallax,
            CodeFeature,
            Content,
            ContentGrid,
            Form,
            HoverCards,
            HoverHighlights,
            LinkGrid,
            LogoGrid,
            MediaBlock,
            MediaContent,
            MediaContentAccordion,
            Pricing,
            ReusableContent,
            Slider,
            Statement,
            Steps,
            StickyHighlights,
            ExampleTabs,
          ],
        },
      ],
    },
  ],
}
