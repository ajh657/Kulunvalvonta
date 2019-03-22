const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const api = require('./api.js');

const app = express();
const port = 8000;

app.use(cookieParser());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.post('/', (req,res) => {
    res.send(404);
});

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

app.all('/api/:type', (req,res) => api(req,res));

app.listen(port, () => console.log(`listening on port ${port}`));