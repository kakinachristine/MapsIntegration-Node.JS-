const request = require('request');
let ACCESS_TOKEN = 'pk.eyJ1IjoidHJ5a2UiLCJhIjoiY2xrcWx2amtqMm5xbTNncnpwNGw5cWJnaiJ9.EBYObxb78Yenhv-OQ84O1Q';

const reverseGeocoding = function (latitude, longitude) {

    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
        + longitude + ', ' + latitude
        + '.json?access_token=' + ACCESS_TOKEN;

    request({ url: url, json: true }, function (error, response) {
        if (error) {
            console.log('Unable to connect to Geocode API');
        } else if (response.body.features.length == 0) {
            console.log('Unable to find location. Try to'
                + ' search another location.');
        } else {
            console.log(response.body.features[0].place_name);
        }
    })
}

// Sample data (Indore lat-long)
let latitude = -1.2870553304979557;
let longitude = 36.82039235294523;

// Function call
reverseGeocoding(latitude, longitude);
