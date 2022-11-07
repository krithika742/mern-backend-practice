const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Home Route
app.get('/', (req, res) => {
    res.send('Home!')
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    })   
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));

app.listen(5000, () => {
    console.log("Running")
})