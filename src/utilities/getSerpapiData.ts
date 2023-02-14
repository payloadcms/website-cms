import { Payload } from "payload";
// import { formatPagePath } from "./formatPagePath";
// import type { GoogleMapsParameters } from 'serpapi';
// import { getJson } from 'serpapi';
// import axios from 'axios';
// import qs from 'qs';
import axios from 'axios';

export const getSerpapiData = async ({
                                         doc,
                                         collection,
                                         payload
                                     }: {
    doc: any,
    collection: string,
    payload: Payload
}): Promise<void> => {

    try {
        const { query, latitude: lat, langitude: lang } = doc;
        const res1 = await axios.get(`https://serpapi.com/search?engine=google_maps&q=${query}&ll=@${lat},${lang},15.1z&type=search&api_key=ba9a3e5451c9d663d8a75d8e5ca834a8fb68fa89722aa1c0655183aa833eb321`);


        for (const data of res1.data.local_results) {

            await payload.create({
            collection: 'case-studies',
            data: {
                description: data.description,
                position: data.position,
                title: data.title,
                address: data.address,
                rating: data.rating,
                reviews: data.reviews,
                phone: data.phone,
                website: data.website,
                thumbnail: data.thumbnail,
                type: data.type,
                latitude: data.latitude,
                longitude: data.gps_coordinates.longitude,
                photos_link: data.gps_coordinates.photos_link,
                place_id: data.place_id,
            }
        });
        }
    }catch (err) {
        payload.logger.error(`Error hitting revalidate route for coffee}`);
    }
    /*const path = await formatPagePath(collection, doc);

    try {
        const res = await fetch(`${process.env.PAYLOAD_PUBLIC_APP_URL}/api/revalidate?secret=${process.env.PAYLOAD_PRIVATE_NEXTJS_REVALIDATION_KEY}&path=${path}`);

        if (res.ok) {
            payload.logger.info(`Revalidated path ${path}`);
        } else {
            payload.logger.error(`Error revalidating path ${path}`);
        }
    } catch (err) {
        payload.logger.error(`Error hitting revalidate route for ${path}`);
    }*/
};
