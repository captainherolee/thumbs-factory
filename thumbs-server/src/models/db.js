const mariadb = require("mariadb");
const dotenv = require("dotenv"); // dotenv 라이브러리 로드

dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database. ");
});

module.exports = connection;
