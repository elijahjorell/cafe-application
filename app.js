
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

const async = require('async');
const path = require('path');

const cafeRouter = require('./routers/cafeRouter');

const app = express();

mongoose.connect('mongodb+srv://public:public123@cluster0.wk80r.mongodb.net/cafe-application?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', cafeRouter);

app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}`);
});