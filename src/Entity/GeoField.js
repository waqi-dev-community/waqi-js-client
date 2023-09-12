import WaqiAPIEntity from './WaqiAPIEntity'

class GeoFeed extends WaqiAPIEntity {
    setCoordinates(latitude, longitude) {
        this.queryParams.lat = latitude;
        this.queryParams.lon = longitude;
        return this; // Return the class object to enable method chaining
    }

    url() {
        // /feed/geo::lat;:lng/?token=:token
        const url = `${this.baseUrl}feed/geo:${this.queryParams.lat};${this.queryParams.lon}/`;
        this.queryParams = {};
        return url;
    }
}

module.exports = GeoFeed;