import MapStation  from './Entity/MapStation';
import CityFeed from "./Entity/CityFeed";
import Search from "./Entity/Search";
import IPFeed from "./Entity/IPFeed";
import GeoFeed from "./Entity/GeoField";

class API {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    cityFeed() {
        return new CityFeed(this.apiKey);
    }

    search() {
        return new Search(this.apiKey);
    }

    geoFeed() {
        return new GeoFeed(this.apiKey);
    }

    ipFeed() {
        return new IPFeed(this.apiKey);
    }

    mapStation() {
        return new MapStation(this.apiKey);
    }
}

module.exports = API;