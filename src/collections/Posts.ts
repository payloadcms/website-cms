import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import { Banner } from '../blocks/Banner';
import { BlogContent } from '../blocks/BlogContent';
import { Code } from '../blocks/Code';
import { MediaBlock } from '../blocks/Media';
import richText from '../fields/richText';
import { slugField } from '../fields/slug';
import { formatPreviewURL } from '../utilities/formatPreviewURL';
import { regeneratePage } from '../utilities/regeneratePage';

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    preview: (doc) => formatPreviewURL('posts', doc),
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
          collection: 'posts', 
          doc 
        });
      },
    ]
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    richText({
      name: 'excerpt',
    }),
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        Banner,
        BlogContent,
        Code,
        MediaBlock,
      ],
      required: true,
    },
    slugField(),
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        position: 'sidebar',
      }
    },
  ]
}