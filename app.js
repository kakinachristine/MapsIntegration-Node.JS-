const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/public' });
});

app.post('/calculate_distance', (req, res) => {
    const { latitude1, longitude1, latitude2, longitude2 } = req.body;
    const location1 = { latitude: parseFloat(latitude1), longitude: parseFloat(longitude1) };
    const location2 = { latitude: parseFloat(latitude2), longitude: parseFloat(longitude2) };

    const distance = calculateDistance(location1, location2);
    res.json({ distance: distance });
});

function calculateDistance(location1, location2) {
    const R = 6371; // Earth's radius in kilometers
    const lat1 = toRadians(location1.latitude);
    const lon1 = toRadians(location1.longitude);
    const lat2 = toRadians(location2.latitude);
    const lon2 = toRadians(location2.longitude);

    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
