const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

require('./db').connect();

//const routes = require('./src/routes');
const PORT = process.env.PORT || 5000;


const app = express();
//Set Up the Assets Folder
app.use(express.static(path.join(__dirname, 'public')));
// Middlewares

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

//app.use('/', routes)

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server Started at ${PORT}`)
});

module.exports = app;