import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import { Banner } from '../blocks/Banner';
import { BlogContent } from '../blocks/BlogContent';
import { Code } from '../blocks/Code';
import { MediaBlock } from '../blocks/Media';
import richText from '../fields/richText';
import { slugField } from '../fields/slug';

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
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
  ]
}