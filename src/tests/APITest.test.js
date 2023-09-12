import {describe, test, expect, beforeAll} from '@jest/globals'
import API  from '../API';
 const apiKey = 'demo'; // Replace with your actual API key

describe('API Tests', () => {
    let waqiAPI;

    beforeAll(() => {
        waqiAPI = new API(apiKey);
    });

    test('CityFeed API', async () => {
        const cityFeedEntity = waqiAPI.cityFeed();
        const response = await cityFeedEntity.setCity('Lagos').fetchItems();
        expect(typeof response).toBe('object');
    }, 10000);
    //
    // test('Search API Returns Array', async () => {
    //     const searchEntity = waqiAPI.search();
    //     const response = await searchEntity.setKeyword('keyword').fetch(true);
    //     expect(Array.isArray(response)).toBe(true);
    // });
    //
    // test('GeoFeed API', async () => {
    //     const geoFeedEntity = waqiAPI.geoFeed();
    //     const response = await geoFeedEntity.setCoordinates(37.7749, -122.4194).fetch();
    //     expect(typeof response).toBe('object');
    // });
    //
    // test('IPFeed API', async () => {
    //     const ipFeedEntity = waqiAPI.ipFeed();
    //     const response = await ipFeedEntity.setIP('8.8.8.8').fetch();
    //     expect(typeof response).toBe('object');
    // });
    //
    // test('MapStations API', async () => {
    //     const mapStationEntity = waqiAPI.mapStation();
    //     const response = await mapStationEntity.setMapBounds(40.712, -74.006, 34.052, -118.243).fetch();
    //     expect(typeof response).toBe('object');
    // });
});
