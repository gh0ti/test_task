import Fetcher from "./fetcher.js";
import dateConverter from "./date-converter.js";
import Rate from "../db/schema/rate.js";

class CachedFetcher {
    constructor(date = new Date()) {
        this.date = date;
        this.fetcher = new Fetcher(date);
    }

    async getRate() {
        let rate = await this.findRate();

        if (!rate) {
            rate = await this.fetcher.getRate();
            const dbRate = new Rate({date: dateConverter(this.date), rate});
            await dbRate.save();
        }

        return rate;
    }

    async findRate() {
        const rate = await Rate.findOne({date: dateConverter(this.date)});

        return rate?.rate;
    }
}

export default CachedFetcher;
