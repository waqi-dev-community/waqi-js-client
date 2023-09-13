import API  from '../API';

const apiKey = 'demo';
const waqiAPI = new API(apiKey);

const cityFeedEntity = waqiAPI.cityFeed();
cityFeedEntity.setCity("Munich");
cityFeedEntity.fetchItems(true).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});