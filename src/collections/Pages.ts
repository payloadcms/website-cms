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
import { ReusableContent } from '../blocks/ReusableContent';
import { Slider } from '../blocks/Slider';
import { Steps } from '../blocks/Steps';
import { hero } from '../fields/hero';
import { slugField } from '../fields/slug';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            hero,
          ]
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
                CaseStudiesHighlight,
                Content,
                ContentGrid,
                FeatureHighlight,
                Form,
                LinkGrid,
                MediaBlock,
                MediaContent,
                ReusableContent,
                Slider,
                Steps,
              ]
            }
          ]
        }
      ]
    },
    slugField(),
  ]
}