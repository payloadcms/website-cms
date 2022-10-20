import { CollectionConfig } from 'payload/types';
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
import { Slider } from '../blocks/Slider';
import { Steps } from '../blocks/Steps';

export const ReusableContent: CollectionConfig = {
  slug: 'reusable-content',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Reusable Content',
    plural: 'Reusable Contents',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        CallToAction,
        CardGrid,
        CaseStudiesHighlight,
        Content,
        ContentGrid,
        FeatureHighlight,
        Form,
        LinkGrid,
        MediaBlock,
        MediaContent,
        Slider,
        Steps,
      ]
    }
  ]
}