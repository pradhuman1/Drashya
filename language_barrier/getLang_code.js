const express = require('express');
const app = express();
var unirest = require("unirest");

exports.getLangCode = async function (sample) {

    var lang_id;
    var req = unirest("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2/detect");
    req.headers({
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-key": "865f29b0dfmsh4d13d0a1208e8ddp179a8ajsn2a0b794cd469",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "useQueryString": true
    });

    req.form({
        "q": sample
    });

    var id = new Promise(async function (resolve, reject) {
        try {
            await req.end(function (res) {
                lang_id = res.body.data.detections;
                resolve(lang_id);
            });
        } catch (err) {
            reject(err);
        }

    })

    await id.then((data) => {
        console.log(data);
    }).catch();
    return lang_id;
}
