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
    var passwordHash = sha256(req.body.Password).toUpperCase();

    console.log(passwordHash);
    if (passwordHash == Database.GetPasswordHash(req.body.Username)) {
        SetSession(req,res,req.body.Username)
        res.redirect('/');
    }else{
        res.sendStatus(403);
    }
}

/** @type {Express.RequestHandler} */
function SetSession(req, res, user) {
    var Database = require('./mysql.js');
    var uuid = require('uuid-by-string');
    const UserID = Database.GetUserUuid(user);

    var now = Date.now();
    var ExpireTime = 7200000;
    var Token =  uuid(UserID + now + req.ip + req.hostname);

    Database.LoginToken(UserID, Token);
    res.cookie('LoginToken', Token, {maxAge: ExpireTime});
} 