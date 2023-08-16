const express = require("express");
const mariadb = require("mariadb");
const cors = require("cors");

const app = express();
const port = 5000;

// MariaDB 연결 설정
const pool = mariadb.createPool({
  host: "localhost", // 호스트 주소
  user: "your_username", // 사용자 이름
  password: "your_password", // 비밀번호
  database: "your_database", // 데이터베이스 이름
});

app.use(cors());
// API 엔드포인트
app.get("/api/v1/electricity", (req, res) => {
  // 실제 코드 작성
});

app.get("/api/v1/electricity/status", (req, res) => {
  // 실제 코드 작성
});

app.get("/api/v1/gas", (req, res) => {
  // 실제 코드 작성
});

app.get("/api/v1/gas/status", (req, res) => {
  // 실제 코드 작성
});

app.get("/api/v1/ping", (req, res) => {
  // 실제 코드 작성
});
app.get("/api/data", (req, res) => {
  pool
    .getConnection()
    .then((conn) => {
      conn
        .query("SELECT * FROM your_table")
        .then((rows) => {
          conn.release();
          res.json(rows);
        })
        .catch((err) => {
          conn.release();
          console.error("Query error:", err);
          res.status(500).json({ error: "Error querying the database" });
        });
    })
    .catch((err) => {
      console.error("Connection error:", err);
      res.status(500).json({ error: "Error connecting to the database" });
    });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
