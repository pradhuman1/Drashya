const express = require('express');
const app = express();
var unirest = require("unirest");

exports.translate = async function (data, langCodeNew, langCodeOld) {
    var translatedText;
    console.log(data);
    console.log(langCodeNew);
    console.log(langCodeOld);

    var req = unirest("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");

    req.headers({
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-key": "114a03074emshed4812464ea0bfbp17ad94jsn90871bc6120d",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "useQueryString": true
    });
    req.form({
        "q": data,
        "source": langCodeOld,
        "target": langCodeNew
    });
    req.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);
    });
    var id = new Promise(async function (resolve, reject) {
        try {
            await req.end(function (res) {
                translatedText = res.body.data.translations;
                resolve(translatedText);
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
// translate("", "", "");

// var unirest = require("unirest");
// var req = unirest("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");

// req.headers({
//     "content-type": "application/x-www-form-urlencoded",
//     "accept-encoding": "application/gzip",
//     "x-rapidapi-key": "114a03074emshed4812464ea0bfbp17ad94jsn90871bc6120d",
//     "x-rapidapi-host": "google-translate1.p.rapidapi.com",
//     "useQueryString": true
// });
// req.form({
//     "q": "Hello, world!",
//     "source": "en",
//     "target": "es"
// });


// req.end(function (res) {
//     if (res.error) throw new Error(res.error);

//     console.log(res.body);
// });