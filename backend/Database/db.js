const {Pool} = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
    username: process.env.DB_USER,
    password: process.env.DDB_PASS,
    host: process.env.DDB_HOST,
    database: process.env.DDB_NAME,
    port: process.env.DDB_PORT, 


});
module.exports = pool;