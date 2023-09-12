import WaqiAPIEntity from './WaqiAPIEntity'

class Search extends WaqiAPIEntity {
    setKeyword(keyword) {
        this.queryParams.keyword = keyword;
        return this; // Return the class object to enable method chaining
    }

    url() {
        return `${this.baseUrl}search/`;
    }
}

module.exports = Search;