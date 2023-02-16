import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { publishedOnly } from '../access/publishedOnly';
import { formatPreviewURL } from '../utilities/formatPreviewURL';
import { getSerpapiData } from '../utilities/getSerpapiData';
import Bannerbear from 'bannerbear';


export const ImageDemandes: CollectionConfig = {
    slug: 'image-demandes',
    admin: {
        useAsTitle: 'image-demandes'
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
            async ({ req: { payload }, doc }) => {
                const bb = new Bannerbear("your api key");
                const images = await bb.create_image(
                    "yKBqAzZ9xnrnbvMx36",
                    {
                        modifications: [
                            {
                                "name": "background",
                                "image_url": "https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg"
                            },
                            {
                                "name": "image_container",
                                "image_url": "https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg"
                            },
                            {
                                "name": "title",
                                "text": "Ysdsds this text",
                                "color": null,
                                "background": null
                            }
                        ],
                    },
                    true
                );
                payload.logger.info(JSON.stringify(images));

                /*await getSerpapiData({
                     payload,
                     collection: 'demande',
                     doc
                 })*/
            },
        ]
    },
    fields: [

        {
            name: 'query',
            type: 'text',
            required: true,
        }
    ]
}
