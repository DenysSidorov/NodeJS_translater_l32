var request = require('request');

//en-ru
var translate = "Hello, my name is Denis";

var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?' +
    'key=trnsl.1.1.20161109T153233Z.4b56c3d2284692e3.84a53dd78c5a0a83db51ae261cd6ac07f7f30230&' +
    'text=' + translate + '&' +
    'lang=ru&' +
    'format=plain&' +
    'options=1';


request(url, function (error, response, body) {

    if (!error && response.statusCode == 200) {

        console.log(JSON.parse(body).text[0]); // Show the HTML for the Google homepage.


    }
});