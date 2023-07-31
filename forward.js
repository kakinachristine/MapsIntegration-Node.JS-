const request = require('request');
let ACCESS_TOKEN = 'pk.eyJ1IjoidHJ5a2UiLCJhIjoiY2xrcWx2amtqMm5xbTNncnpwNGw5cWJnaiJ9.EBYObxb78Yenhv-OQ84O1Q';

const forwardGeocoding = function (address) {

    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
        + encodeURIComponent(address) + '.json?access_token='
        + ACCESS_TOKEN + '&limit=1';

    request({ url: url, json: true }, function (error, response) {
        if (error) {
            callback('Unable to connect to Geocode API', undefined);
        } else if (response.body.features.length == 0) {
            callback('Unable to find location. Try to '
                + 'search another location.');
        } else {

            let longitude = response.body.features[0].center[0]
            let latitude = response.body.features[0].center[1]
            let location = response.body.features[0].place_name

            console.log("Latitude :", latitude);
            console.log("Longitude :", longitude);
            console.log("Location :", location);
        }
    })
}
// Sample data
let address = ' KICC, Parliament Road, Nairobi';

// Function call
forwardGeocoding(address);
