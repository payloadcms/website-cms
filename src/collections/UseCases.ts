import { CollectionConfig } from 'payload/types';

export const UseCases: CollectionConfig = {
  slug: 'use-cases',
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