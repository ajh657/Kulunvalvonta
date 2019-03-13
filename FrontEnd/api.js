const Express = require("express");

/** @type {Express.RequestHandler} */
module.exports = function(req,res) {
    switch (req.params.type) {
        case "login":
            login(req,res);
            break;
    
        default:
            if(req.method != "GET") {
                res.sendStatus(404);
            }else{
                res.sendFile(__dirname + "/sites/html/404.html");
            }
            break;
    }
}

/** @type {Express.RequestHandler} */
function login(req,res) {
    var Database = require('./mysql.js');
    var sha256 = require('sha256');
    var passwordHash = sha256(req.body.Password)

    console.log(passwordHash);
    if (passwordHash == Database.GetPasswordHash(req.body.Username)) {
        //res.cookie();
        res.redirect('/');
    }else{
        res.sendStatus(403);
    }

}