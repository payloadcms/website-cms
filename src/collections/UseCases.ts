import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import richText from '../fields/richText';
import { CallToAction } from '../blocks/CallToAction';
import { CardGrid } from '../blocks/CardGrid';
import { CaseStudiesHighlight } from '../blocks/CaseStudiesHighlight';
import { Content } from '../blocks/Content';
import { ContentGrid } from '../blocks/ContentGrid';
import { FeatureHighlight } from '../blocks/FeatureHighlight';
import { Form } from '../blocks/Form';
import { LinkGrid } from '../blocks/LinkGrid';
import { MediaBlock } from '../blocks/Media';
import { MediaContent } from '../blocks/MediaContent';
import { ReusableContent } from '../blocks/ReusableContent';
import { Slider } from '../blocks/Slider';
import { Steps } from '../blocks/Steps';
import { slugField } from '../fields/slug';
import { formatPreviewURL } from '../utilities/formatPreviewURL';
import { regeneratePage } from '../utilities/regeneratePage';
import { CodeFeature } from '../blocks/CodeFeature';
import { HoverHighlights } from '../blocks/HoverHighlights';
import { StickyHighlights } from '../blocks/StickyHighlights';

export const UseCases: CollectionConfig = {
  slug: 'use-cases',
  admin: {
    useAsTitle: 'title',
    preview: (doc) => formatPreviewURL('use-cases', doc),
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
          collection: 'use-cases',
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
    }),
    {
      name: 'heroMedia',
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
        FeatureHighlight,
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
  ]
}