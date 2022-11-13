import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import richText from '../fields/richText';
import { CallToAction } from '../blocks/CallToAction';
import { CardGrid } from '../blocks/CardGrid';
import { CaseStudiesHighlight } from '../blocks/CaseStudiesHighlight';
import { Content } from '../blocks/Content';
import { ContentGrid } from '../blocks/ContentGrid';
import { Form } from '../blocks/Form';
import { LinkGrid } from '../blocks/LinkGrid';
import { MediaBlock } from '../blocks/Media';
import { MediaContent } from '../blocks/MediaContent';
import { ReusableContent } from '../blocks/ReusableContent';
import { Slider } from '../blocks/Slider';
import { Steps } from '../blocks/Steps';
import { CodeFeature } from '../blocks/CodeFeature';
import { HoverHighlights } from '../blocks/HoverHighlights';
import { StickyHighlights } from '../blocks/StickyHighlights';
import { slugField } from '../fields/slug';
import { formatPreviewURL } from '../utilities/formatPreviewURL';
import { regeneratePage } from '../utilities/regeneratePage';
import largeBody from '../fields/richText/largeBody';

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    preview: (doc) => formatPreviewURL('case-studies', doc),
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
        regeneratePage({
          payload,
          collection: 'case-studies',
          doc
        });
      },
    ]
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    richText({
      name: 'introContent',
      admin: {
        elements: ['h1', largeBody],
        leaves: ['underline'],
      }
    }),
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        CallToAction,
        CardGrid,
        CaseStudiesHighlight,
        CodeFeature,
        Content,
        ContentGrid,
        Form,
        HoverHighlights,
        LinkGrid,
        MediaBlock,
        MediaContent,
        ReusableContent,
        Slider,
        Steps,
        StickyHighlights,
      ]
    },
    slugField(),
    {
      name: 'url',
      label: 'URL',
      type: 'text',
      admin: {
        position: 'sidebar'
      }
    }
  ]
}