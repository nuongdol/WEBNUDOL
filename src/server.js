import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;
//const express = require('express')
//const path = require('path');
configViewEngine(app);

app.get('/', (req, res) => {
    res.render('test/index.ejs')
})

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './index.html'));
// })

app.get('/about', (req, res) => {
    res.send(`I'm Nuong and i am a student!!`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`)
})




