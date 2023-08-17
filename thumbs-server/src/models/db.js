const mariadb = require("mariadb");
const dotenv = require("dotenv");

dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.getConnection((error, connection) => {
  if (error) {
    throw error;
  }
  console.log("Successfully connected to the database.");
  connection.release(); // 커넥션 사용 후 반드시 반환
});

module.exports = pool; // 커넥션 객체가 아니라 풀 객체를 내보냄
