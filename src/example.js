const API = require('./API')

const apiKey = 'demo';
const waqiAPI = new API(apiKey);

const cityFeedEntity = waqiAPI.cityFeed();
cityFeedEntity.setCity("Shanghai");
cityFeedEntity.fetchItems().then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});