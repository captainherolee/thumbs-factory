const mariadb = require("mariadb");
const dotenv = require("dotenv");

dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

pool.getConnection((error, connection) => {
  if (error) {
    throw error;
  }
  console.log("Successfully connected to the database.");
  connection.release();
});

module.exports = pool;
