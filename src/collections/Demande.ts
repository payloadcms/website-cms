import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import { formatPreviewURL } from '../utilities/formatPreviewURL';
import { getSerpapiData } from '../utilities/getSerpapiData';

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
                getSerpapiData({
                    payload,
                    collection: 'demande',
                    doc
                }).then(r  =>{console.log(r)}).catch(e => console.log(e));
            },
        ]
    },
    fields: [
        {
            name: 'limite',
            type: 'number',
            required: false,
            defaultValue: 10,
        },
        {
            name: 'latitude',
            type: 'number',
            required: true,
        },
        {
            name: 'langitude',
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
