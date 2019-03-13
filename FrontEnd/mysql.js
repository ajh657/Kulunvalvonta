module.exports.GetPasswordHash = function (username) {
    const mysql = require('mysql');
    var connection = GetConnection();
    connection.connect();
    var result;
     connection.query('SELECT Password FROM henkilot where Username = ' +connection.escape(username),function (error, results, fields) {
        result = results[0];
    });

    while (result == null) {}

    return result;
}

function GetConnection(params) {
    var Config = require('./Mysql.json')
    const mysql = require('mysql');
    return mysql.createConnection({
        host     : Config.IP,
        user     : Config.Username,
        password : Config.Password,
        database : Config.DB 
      });
}