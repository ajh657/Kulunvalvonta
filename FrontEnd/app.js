const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;

var api = require('./api.js');

app.get('/', (req,res) => {
    console.log(req.ip);
    console.log(req.path);
    res.sendFile(__dirname + "/sites/html/index.html");
});

app.get('/css/:file', (req,res) => {
    console.log(req.ip);
    console.log(req.path);
    res.sendFile(__dirname + "/sites/css/" + req.params.file);
});

app.get('/:web', (req,res) => {
    console.log(req.ip);
    console.log(req.path);
    console.log(req.params.web);
    if(!fs.existsSync(__dirname + "/sites/html/" + req.params.web + ".html")){
        res.sendFile(__dirname + "/sites/html/404.html");
    }else{
        res.sendFile(__dirname + "/sites/html/" + req.params.web + ".html");
    }
});

app.get('/api/:type', (req,res) => api(req,res));

app.listen(port, () => console.log(`Listening port ${port}`));