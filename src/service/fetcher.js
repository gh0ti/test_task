import dateConverter from "./date-converter.js";

class Fetcher {
    currency = 'USD';

    constructor(date = new Date()) {
        this.date = date;
    }

    async getRate() {
        const data = await fetch(this.getApiString());
        const {rate: result} = (await data.json())[0];

        return result;
    }

    getApiString() {
        return `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${this.currency}&date=${this.getFormattedDate()}&json`;
    }

    getFormattedDate() {
        return dateConverter(this.date);
    }
}

export default Fetcher;
