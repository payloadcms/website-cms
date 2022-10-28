import { Field } from 'payload/types';
import linkGroup from './linkGroup';
import largeBody from './richText/largeBody';

export const hero: Field = {
  name: 'hero',
  label: false,
  type: 'group',
  fields: [
    {
      type: 'select',
      name: 'type',
      label: 'Type',
      required: true,
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Content and Media',
          value: 'contentMedia',
        },
        {
          label: 'Home',
          value: 'home',
        },
      ],
    },
    {
      name: 'richText',
      type: 'richText',
      admin: {
        elements: ['h1', largeBody, 'ul'],
        leaves: ['underline'],
      }
    },
    linkGroup({
      overrides: {
        admin: {
          condition: (_, { type } = {}) => ['contentMedia', 'default'].includes(type),
        },
      }
    }),
    linkGroup({
      appearances: false,
      overrides: {
        name: 'actions',
        label: 'Sidebar Actions',
        maxRows: 3,
        admin: {
          condition: (_, { type }) => type === 'home',
        }
      }
    }),
    linkGroup({
      appearances: ['primary', 'secondary'],
      overrides: {
        name: 'buttons',
        label: 'Buttons',
        maxRows: 2,
        admin: {
          condition: (_, { type }) => type === 'home',
        }
      }
    }),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['contentMedia', 'home'].includes(type),
      },
    },
    {
      name: 'adjectives',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          name: 'adjective',
          type: 'text',
          required: true,
        }
      ],
      admin: {
        condition: (_, { type }) => type === 'home',
      }
    },
  ],
};
