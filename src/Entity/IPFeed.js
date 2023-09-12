import WaqiAPIEntity from './WaqiAPIEntity'

class IPFeed extends WaqiAPIEntity {
    setIP(ipAddress) {
        this.queryParams.ip = ipAddress;
        return this; // Return the class object to enable method chaining
    }

    url() {
        return `${this.baseUrl}feed/here/`;
    }
}

module.exports = IPFeed;