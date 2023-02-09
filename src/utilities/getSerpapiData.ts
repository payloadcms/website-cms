import { Payload } from "payload";
// import { formatPagePath } from "./formatPagePath";
// import type { GoogleMapsParameters } from 'serpapi';
// import { getJson } from 'serpapi';

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
        const res = await fetch(`https://serpapi.com/search.json?engine=google_maps&q=coffee&ll=@40.7455096,-74.0083012,15.1z&type=search&api_key=ba9a3e5451c9d663d8a75d8e5ca834a8fb68fa89722aa1c0655183aa833eb321`);
        payload.logger.info(`Revalidated path coffee ${JSON.stringify(res["local_results"])}`);
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
