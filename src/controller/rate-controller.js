import CachedFetcher from "../service/cached-fetcher.js";

export async function getRate(req, res) {
    try {
        const cachedFetcher = new CachedFetcher();
        const number = await cachedFetcher.getRate();

        res.json({number});
    } catch (e) {
        res.sendStatus(400);
    }
}
