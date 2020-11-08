const express = require('express');
const app = express();
var unirest = require("unirest");

exports.translate = async function (data, langCodeNew, langCodeOld) {
    var translatedText;
    var req = unirest("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");

    req.headers({
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-key": "865f29b0dfmsh4d13d0a1208e8ddp179a8ajsn2a0b794cd469",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "useQueryString": true
    });

    req.form({
        "q": data,
        "source": langCodeOld,
        "target": langCodeNew
    });

    var id = new Promise(async function (resolve, reject) {
        try {
            await req.end(function (res) {
                if (res.error) throw new Error(res.error);
                translatedText = res.body.data.translations;
            });
        } catch (err) {
            reject(err);
        }

    })

    await id.then((data) => {
        console.log(data);
    }).catch();


    return translatedText;
}