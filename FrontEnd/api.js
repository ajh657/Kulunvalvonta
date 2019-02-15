const Express = require("express");

/** @type {Express.RequestHandler} */
module.exports = function(req,res) {
    switch (req.params.type) {
        case "login":
            
            break;
    
        default:
            res.sendFile(__dirname + "/sites/html/404.html");
            break;
    }
}