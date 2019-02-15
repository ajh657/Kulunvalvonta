const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;

app.get('/', (req,res) => {
    console.log(req.ip);
    console.log(req.path);
    res.sendFile(__dirname + "/sites/html/index.html");
});

app.get('/css/:file', (req,res) => {
    console.log(req.ip);
    console.log(req.path);
    res.sendFile(__dirname + "/sites/css/index.css");
});

app.listen(port, () => console.log(`Listening port ${port}`));