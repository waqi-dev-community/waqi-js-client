import WaqiAPIEntity from './WaqiAPIEntity'

class CityFeed extends WaqiAPIEntity {
    setCity(city) {
        this.queryParams.city = city;
        return this; // Return the class object to enable method chaining
    }

    url() {
        // /feed/:city/?token=:token
        const url = `${this.baseUrl}feed/${this.queryParams.city}/`;
        this.queryParams = {};
        return url;
    }
}
module.exports = CityFeed;
