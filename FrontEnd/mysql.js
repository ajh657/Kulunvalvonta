module.exports = function GetPasswordHash(username) {
    const mysql = require('mysql');


}

function GetConnection(params) {
    var Config = require('./Mysql.json')
    return mysql.createConnection({
        host     : Config.IP,
        user     : Config.Username,
        password : Config.Password,
        database : Config.DB 
      });
}