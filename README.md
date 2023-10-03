# WAQI JavaScript Client

JavaScript client library for the World Air Quality Index (WAQI) APIs. See documentation [here](https://aqicn.org/json-api/doc/).
All available API modules are supported - City feed, Geolocalized feed, Search, and Map Queries.

### Installation

You can include this package in your JavaScript project using npm or yarn:

```shell
npm install waqi-js-client
```

### Get API key

Sign up for an API key [here](https://aqicn.org/data-platform/token/)

### Making Requests

The primary `API` class is a factory class that creates objects for each of the API modules, allowing you to make requests to any of them with your desired request parameters. You have to first create an object for it, then access your desired API module via the object. See the code snippets below:

```javascript
const apiKey = "YOUR_API_KEY";
const waqiAPI = new API(apiKey);
```

Replace `'YOUR_API_KEY'` with the actual API key you already obtained from above.

**For City Feed:**

```javascript
const cityFeedEntity = waqiAPI.cityFeed();
cityFeedEntity.setCity("Munich");
cityFeedEntity
  .fetchItems()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

**For Search:**

```javascript
const searchEntity = waqiAPI.search();
searchEntity.setKeyword("Johannesburg");
searchEntity
  .fetchItems()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

**For Lat/Lng based Geolocalized feed:**

```javascript
const geoFeedEntity = waqiAPI.geoFeed();
geoFeedEntity.setCoordinates(37.7749, -122.4194);
geoFeedEntity
  .fetchItems()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

**For IP based Geolocalized feed:**

```javascript
const ipFeedEntity = waqiAPI.ipFeed();
ipFeedEntity.setIP("MY_IP");
ipFeedEntity
  .fetchItems()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

**For Map Queries:**

```javascript
const mapStationEntity = waqiAPI.mapStation();
mapStationEntity.setMapBounds(40.712, -74.006, 34.052, -118.243);
mapStationEntity
  .fetchItems()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```