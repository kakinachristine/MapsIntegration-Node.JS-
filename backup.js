const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('map.html', { root: __dirname + '/public' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
