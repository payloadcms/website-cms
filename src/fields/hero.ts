import { slateEditor } from '@payloadcms/richtext-slate'
import type { Field } from 'payload/types'

import carousel from './carousel'
import commandLine from './commandLine'
import linkGroup from './linkGroup'
import livestreamFields from './livestreamFields'
import logoGroup from './logoGroup'
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
        {
          label: 'Centered Carousel',
          value: 'centeredCarousel',
        },
      ],
    },
    livestreamFields,
    commandLine,
    {
      name: 'richText',
      type: 'richText',
      admin: {
        condition: (_, { type }) => type !== 'livestream',
      },
      editor: slateEditor({
        admin: {
          elements: ['h1', largeBody, 'ul', label],
          leaves: ['underline'],
        },
      }),
    },
    {
      name: 'sidebarContent',
      type: 'richText',
      admin: {
        condition: (_, { type }) => type !== 'livestream',
      },
      editor: slateEditor({
        admin: {
          elements: ['link'],
          leaves: ['underline'],
        },
      }),
    },
    linkGroup({
      overrides: {
        admin: {
          condition: (_, { type } = {}) =>
            ['contentMedia', 'default', 'livestream', 'centeredCarousel'].includes(type),
        },
      },
    }),
    linkGroup({
      appearances: false,
      overrides: {
        name: 'actions',
        label: 'Sidebar Actions',
        maxRows: 3,
        admin: {
          condition: (_, { type }) => type === 'home',
        },
      },
    }),
    linkGroup({
      appearances: ['primary', 'secondary'],
      overrides: {
        name: 'buttons',
        label: 'Buttons',
        maxRows: 2,
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
      name: 'mediaWidth',
      type: 'select',
      label: 'Media Width',
      defaultValue: 'normal',
      options: [
        {
          label: 'Normal',
          value: 'normal',
        },
        {
          label: 'Wide',
          value: 'wide',
        },
      ],
      admin: {
        condition: (_, { type } = {}) => ['contentMedia'].includes(type),
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
        },
      ],
      admin: {
        condition: (_, { type }) => type === 'home',
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
    logoGroup,
    carousel,
  ],
}
