import { slateEditor } from '@payloadcms/richtext-slate'
import type { Field } from 'payload/types'

import linkGroup from './linkGroup'
import livestreamFields from './livestreamFields'
import label from './richText/label'
import largeBody from './richText/largeBody'

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
          label: 'Centered Content',
          value: 'centeredContent',
        },
        {
          label: 'Form',
          value: 'form',
        },
        {
          label: 'Home',
          value: 'home',
        },
        {
          label: 'Livestream',
          value: 'livestream',
        },
      ],
    },
    livestreamFields,
    {
      name: 'richText',
      type: 'richText',
      admin: {
        condition: (_, { type } = {}) => type !== 'livestream',
      },
      editor: slateEditor({
        admin: {
          elements: ['h1', largeBody, 'ul', label],
          leaves: ['underline'],
        },
      }),
    },
    {
      name: 'description',
      type: 'richText',
      admin: {
        condition: (_, { type } = {}) => (type !== 'livestream'),
      },
      editor: slateEditor({
        admin: {
          elements: ['link'],
          leaves: ['underline'],
        },
      }),
    },
    linkGroup({
      appearances: false,
      overrides: {
        name: 'primaryButtons',
        label: 'Primary Buttons',
        admin: {
          condition: (_, { type }) => type === 'home',
        },
      },
    }),
    {
      name: 'secondaryHeading',
      type: 'richText',
      admin: {
        condition: (_, { type }) => type === 'home',
      },
      editor: slateEditor({
        admin: {
          elements: ['h1', 'h2', 'h3', largeBody, 'ul', label],
          leaves: ['underline'],
        },
      }),
    },
    {
      name: 'secondaryDescription',
      type: 'richText',
      admin: {
        condition: (_, { type }) => type === 'home',
      },
      editor: slateEditor({
        admin: {
          elements: ['h2', 'h3', largeBody, 'ul', label, 'link'],
          leaves: ['underline'],
        },
      }),
    },
    linkGroup({
      overrides: {
        admin: {
          condition: (_, { type } = {}) =>
            [
              'contentMedia',
              'default',
              'livestream',
              'centeredContent',
            ].includes(type),
        },
      },
    }),
    linkGroup({
      appearances: false,
      overrides: {
        name: 'secondaryButtons',
        label: 'Secondary Buttons',
        admin: {
          condition: (_, { type }) => type === 'home',
        },
      },
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
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      admin: {
        condition: (_, { type }) => type === 'form',
      },
    },
    {
      name: 'logos',
      type: 'array',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      admin: {
        condition: (_, { type }) => type === 'home',
      },
    },
  ],
}
