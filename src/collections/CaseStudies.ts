import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import { formatPreviewURL } from '../utilities/formatPreviewURL';
import { regeneratePage } from '../utilities/regeneratePage';

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    preview: (doc) => formatPreviewURL('case-studies', doc),
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
       /* regeneratePage({
          payload,
          collection: 'case-studies',
          doc
        });*/
      },
    ]
  },
  fields: [
    {
      name: 'position',
      type: 'number',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      required: false,
    },
    {
      name: 'reviews',
      type: 'number',
      required: false,
    },
    {
      name: 'title',
      type: 'text',
      required: false,
    },
    {
      name: 'photos_link',
      type: 'text',
      required: false,
    },
    {
      name: 'address',
      type: 'text',
      required: false,
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
    },
    {
      name: 'website',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'thumbnail',
      type: 'text',
      required: true,
    },
    {
      name: 'latitude',
      type: 'number',
      required: false,
    },
    {
      name: 'longitude',
      type: 'number',
      required: false,
    },
    {
      name: 'subDomain',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'none',
      required: true,
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Pending',
          value: 'Pending',
        },
        {
          label: 'Done',
          value: 'Done',
        },
      ]
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'snapId',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: "canvasFile",
      type: "upload",
      relationTo: "media",
      required: false,
    },
  ]
}
