const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
    var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    var lang = req.headers['accept-language'];
    lang = lang.split(';')[0].split(',')[0];
    var os = req.headers['user-agent'];
    os = os.substring(os.indexOf('(')+1, os.indexOf(')'));
    res.send({
        "ipaddress": ip,
        "language": lang,
        "software": os
    });
});

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT);
});