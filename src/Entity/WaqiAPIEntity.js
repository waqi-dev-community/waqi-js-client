import axios from 'axios';

class WaqiAPIEntity {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.queryParams = {};
        this.baseUrl = 'https://api.waqi.info/';
    }

    // Abstract method to define the URL for the specific API entity
    url() {
        throw new Error('Subclasses must implement the url() method.');
    }

    buildQueryParams() {
        if (Object.keys(this.queryParams).length === 0) {
            return '';
        }
        const queryParams = new URLSearchParams(this.queryParams);
        return '&' + queryParams.toString();
    }

    async fetchItems(asArray = false) {
        const url = this.url();
        const tokenParam = `token=${this.apiKey}`;
        const queryParams = this.buildQueryParams();

        try {
            const response = await axios.get(`${url}?${tokenParam}${queryParams}`);
            return asArray ? response.data : JSON.parse(response.data);
        } catch (error) {
            throw new Error(`Error fetching data: ${error.message}`);
        }
    }
}

module.exports = WaqiAPIEntity;