const axios = require('axios')

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

    async fetchItems() {
        const url = this.url();
        const tokenParam = `token=${this.apiKey}`;
        const queryParams = this.buildQueryParams();

        const options = {
            method: 'GET',
            url: `${url}?${tokenParam}${queryParams}`,
            headers: {
                'content-type': 'application/json',
            },
        };

        return axios.request(options).then(response => {
            return response.data
        }).catch( error => {
            throw error;
        })
    }
}

module.exports = WaqiAPIEntity;