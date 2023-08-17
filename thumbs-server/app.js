require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000; // .env 파일에 PORT가 설정되지 않았을 경우 기본값 5000 사용

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  res.json({ message: "ok" });
});

require("./src/routes/electricity.routes.js")(app);
require("./src/routes/gas.routes.js")(app);

app.listen(port, () => {
  console.log("Server is running on port 3000.");
});
