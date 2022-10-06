import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';

require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;
//const express = require('express')
//const path = require('path');
//set up view engine 
configViewEngine(app);
//init web route
initWebRoute(app);


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './index.html'));
// })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`)
})




