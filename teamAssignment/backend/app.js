const express = require('express');
//What the body-parser middleware will be doing is grabbing the HTTP body, decoding the information, and appending it to the req.body
const bodyParser = require('body-parser');
//connect to the database
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const professionalRoutes = require('./routes/professional');

const port = process.env.PORT || 8080;
const app = express();

//connects to the routes
app.use('/', require('./routes'))

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`REST API app running on port ${port}`)
})