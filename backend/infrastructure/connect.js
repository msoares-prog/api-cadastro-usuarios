const mysql = require('mysql');

const connect = mysql.createConnection({
  host: 'localhost',
  post: 3006,
  user: 'root',
  password: 'senha',
  database: 'Usuarios',
  insecureAuth : true
})

module.exports = connect;