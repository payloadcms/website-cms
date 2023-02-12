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
        /*const params = {
            q: "coffee",
            ll: "@40.7455096,-74.0083012,15.1z",
            type: "search",
            api_key: "ba9a3e5451c9d663d8a75d8e5ca834a8fb68fa89722aa1c0655183aa833eb321"
        } as GoogleMapsParameters;
        // Show result as JSON
        const response = await getJson("google_maps", params);*/
        // https://serpapi.com/search.json?engine=google_maps&q=coffee&ll=@40.7455096,-74.0083012,15.1z&type=search
        // const res = await fetch(`https://serpapi.com/search.json?engine=google_maps&q=coffee&ll=@40.7455096,-74.0083012,15.1z&type=search&api_key=ba9a3e5451c9d663d8a75d8e5ca834a8fb68fa89722aa1c0655183aa833eb321`);

        /*let data = qs.stringify({
            'engine': 'google_maps',
            'q': 'coffee',
            'll': '@40.7455096,-74.0083012,15.1z',
            'type': 'search',
            'api_key': 'ba9a3e5451c9d663d8a75d8e5ca834a8fb68fa89722aa1c0655183aa833eb321'
        });*/
        /*let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://serpapi.com/search?engine=google_maps&q=coffee&ll=@40.7455096,-74.0083012,15.1z&type=search&api_key=ba9a3e5451c9d663d8a75d8e5ca834a8fb68fa89722aa1c0655183aa833eb321',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                payload.logger.info(`Revalidated path coffee ${JSON.stringify(response.data)}`);
            })
            .catch(function (error) {
                // console.log(error);
                payload.logger.debug(`Revalidated path coffee ${JSON.stringify(error)}`);
            });*/

        const res1 = await axios.get('https://serpapi.com/search?engine=google_maps&q=coffee&ll=@40.7455096,-74.0083012,15.1z&type=search&api_key=ba9a3e5451c9d663d8a75d8e5ca834a8fb68fa89722aa1c0655183aa833eb321');


        for (const data of res1.data.local_results) {

            payload.logger.info(`--------F ${JSON.stringify(
                {
                    description: data.position,
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
                    longitude: data.longitude,
                    photos_link: data.photos_link,
                    place_id: data.place_id,
                }
            ) }`);

            /*await payload.create({
            collection: 'case-studies',
            data: {
                description: data.position,
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
                longitude: data.longitude,
                photos_link: data.photos_link,
                place_id: data.place_id,
            }
        });*/
        }


        /*const res = await fetch(`https://serpapi.com/search.json?engine=google_maps&q=coffee&ll=@40.7455096,-74.0083012,15.1z&type=search&api_key=ba9a3e5451c9d663d8a75d8e5ca834a8fb68fa89722aa1c0655183aa833eb321`);
        payload.logger.info(`--------4 ${JSON.stringify(res.status) }`);
        await payload.create({
            collection: 'case-studies',
            data: {
                description: JSON.stringify(res.ok),
                title: JSON.stringify(res.status),
            }
        });*/





        // payload.logger.debug(`Revalidated path coffee ${JSON.stringify(res.json())}`);
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
