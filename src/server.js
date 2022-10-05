import express from 'express';
import configViewEngine from './configs/viewEngine';

const app = express()
//const express = require('express')
//const path = require('path');
configViewEngine(app);

const port = 8080

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




