import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import { formatPreviewURL } from '../utilities/formatPreviewURL';
import { regeneratePage } from '../utilities/regeneratePage';

export const Demande: CollectionConfig = {
    slug: 'demande',
    admin: {
        useAsTitle: 'demande',
        preview: (doc) => formatPreviewURL('demande', doc),
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
            name: 'id',
            type: 'number',
            required: false,
        },
        {
            name: 'limite',
            type: 'number',
            required: false,
            defaultValue: 10,
        },
        {
            name: 'reviews',
            type: 'number',
            required: true,
        },
        {
            name: 'query',
            type: 'text',
            required: true,
        }
    ]
}
