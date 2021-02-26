const mysql = require("mysql")

// const sql = mysql.createConnection({
const sql = mysql.createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root123",
    database: "nodedb",
    insecureAuth: true,
    connectionLimit: 10
})
module.exports = sql;