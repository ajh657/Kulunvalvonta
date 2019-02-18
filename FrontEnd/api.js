const Express = require("express");

/** @type {Express.RequestHandler} */
module.exports = function(req,res) {
    switch (req.params.type) {
        case "login":
            login(req,res)
            break;
    
        default:
            res.sendFile(__dirname + "/sites/html/404.html");
            break;
    }
}

/** @type {Express.RequestHandler} */
function login(req,res) {
    console.log(req.body);
    res.send({ status: 'SUCCESS' });
}