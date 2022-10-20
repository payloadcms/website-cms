import { CollectionConfig } from 'payload/types';

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    }
  ]
}