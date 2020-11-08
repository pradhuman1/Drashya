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

app.get('/Scheme.html', (req, res) => {
    res.sendFile(publicDirectory + '/pages/Scheme.html');
})
var unirest = require("unirest");
// var oldLang_id = getLangCode("hi");
// var newLang_id = getLangCode("दुनिया");
// var convertedText = translate("string", "hi", "en");
// translate("string", "hi", "en")
app.post('/changeLang', async (req, res) => {
    var body = req.body;
    var lang_id = body.lang_id;
    var oldLang_id;
    if (lang_id == 'hi') {
        oldLang_id = 'en';
    } else {
        oldLang_id = 'hi';
    }
    var string = body.string;
    // console.log(JSON.stringify(string));
    // var convertedText = await translate(string, lang_id, oldLang_id);

    res.send(JSON.stringify({
        converted: "convertedText"
    }));
})

app.listen(1100, () => {
    console.log("Listening on port 1100")
})