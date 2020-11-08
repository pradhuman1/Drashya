const express = require('express');
const app = express();
const path = require('path');

const { getLangCode } = require('./language_barrier/getLang_code.js');
const { translate } = require('./language_barrier/translateLang.js');
const publicDirectory = path.join(__dirname, '/frontend');

app.use(express.json());
app.use(express.static(publicDirectory));

app.get('', (req, res) => {
    res.sendFile(publicDirectory + '/pages/landingPage.html');
})
app.get('/index.html', (req, res) => {
    res.sendFile(publicDirectory + '/pages/index.html');
})
var unirest = require("unirest");
// var oldLang_id = getLangCode("hi");
// var newLang_id = getLangCode("दुनिया");
// var convertedText = translate("Hello", "hi", "en");


app.listen(1100, () => {
    console.log("Listening on port 1100")
})