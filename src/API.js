const MapStation = require("./Entity/MapStation");
const CityFeed = require("./Entity/CityFeed");
const Search = require("./Entity/Search");
const IPFeed = require("./Entity/IPFeed");
const GeoFeed = require("./Entity/GeoFeed");

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
