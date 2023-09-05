import type { Block } from 'payload/types'

const CodeExampleBlock: Block = {
  slug: 'CodeExampleBlock',
  labels: {
    singular: 'Code Example',
    plural: 'Code Examples',
  },
  fields: [
    {
      name: 'route',
      type: 'text',
    },
    {
      name: 'code',
      type: 'code',
      required: true,
    },
  ],
}

const MediaExampleBlock: Block = {
  slug: 'MediaExampleBlock',
  labels: {
    singular: 'Media Example',
    plural: 'Media Examples',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export const ExampleTabs: Block = {
  slug: 'exampleTabs',
  labels: {
    singular: 'Example Tabs',
    plural: 'Example Tabs',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'tabs',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'Examples',
          type: 'blocks',
          blocks: [CodeExampleBlock, MediaExampleBlock],
        },
      ],
    },
  ],
}
