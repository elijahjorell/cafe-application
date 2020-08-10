const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://public:public123@cluster0.wk80r.mongodb.net/cafe-application?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.send('This is the home page');
});

app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}`);
});