const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "dbperpus",
  dateStrings: true,
});

module.exports = connection;
