const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is the home page');
});

app.listen(port, () => {
    console.log('Listening at port http://localhost.${port}');
});