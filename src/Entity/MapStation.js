import WaqiAPIEntity from './WaqiAPIEntity'

class MapStation extends WaqiAPIEntity {
    setMapBounds(latitudeNorth, longitudeWest, latitudeSouth, longitudeEast) {
        this.queryParams.latlng = `${latitudeNorth},${longitudeWest},${latitudeSouth},${longitudeEast}`;
        return this; // Return the class object to enable method chaining
    }

    url() {
        return `${this.baseUrl}map/bounds/`;
    }
}

module.exports = MapStation;