const mysql = require('mysql2');

const connection = mysql.createPool({
  
    host: "162.241.2.218",
    user: "hgma9022_rpg_okita",
    password: "rafael01!",
    database: "hgma9022_RPG",
    port: ""

  });

console.log('Conectado com sucesso')

module.exports = connection.promise();