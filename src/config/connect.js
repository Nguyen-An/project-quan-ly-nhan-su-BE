const _CONST = require('../config/constants')
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: _CONST.INFO_CONFIG_MYSQL.host,
    user: _CONST.INFO_CONFIG_MYSQL.user,
    password: _CONST.INFO_CONFIG_MYSQL.password,
    database: _CONST.INFO_CONFIG_MYSQL.database,
})

connection.connect((err) => {
    if (err) console.log('ket noi CSDL ko thanh cong: ', err);
});

module.exports = connection;