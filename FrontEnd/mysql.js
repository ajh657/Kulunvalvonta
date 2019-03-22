module.exports.GetPasswordHashOld = function (username) {
    const mysql = require('mysql');
    var connection = GetConnection();
    connection.connect();
    var result;
    await (connection.query('SELECT Password FROM henkilot where Username = ' + connection.escape(username),function (error, results, fields) {
        result = results[0];
    }));

    while (result == null) {}

    return result;
}

module.exports.GetPasswordHash = function (username) {
    const mysql = require('sync-mysql');
    var Config = require('./Mysql.json');
    var connection = new mysql({
        host     : Config.IP,
        user     : Config.Username,
        password : Config.Password,
        database : Config.DB 
    });
    
    const result = connection.query("SELECT Password FROM henkilot where Username = '" + username + "';");
    //SELECT Password FROM henkilot where Username = 'username';
    console.log(result);
    return result[0].Password;
}

module.exports.GetUserUuid = function(username) {
    const mysql = require('sync-mysql');
    var Config = require('./Mysql.json');
    var connection = new mysql({
        host     : Config.IP,
        user     : Config.Username,
        password : Config.Password,
        database : Config.DB 
    });
    
    const result = connection.query("SELECT uuid FROM henkilot where Username = '" + username + "';");
    console.log(result);
    return result[0].uuid;
}

module.exports.LoginToken = function(userid, token) {
    const mysql = require('sync-mysql');
    var Config = require('./Mysql.json');
    var connection = new mysql({
        host     : Config.IP,
        user     : Config.Username,
        password : Config.Password,
        database : Config.DB 
    });

    const result = connection.query("UPDATE `SessionId` SET `SessionId` = '"+ token +"' WHERE Userid = '"+ userid +"';");

}