const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('Home!')
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => console.log('Connected to DB'))

app.listen(5000, () => {
    console.log("Running")
})