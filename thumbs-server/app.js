const express = require("express");
const cors = require("cors")();
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.static(path.join(__dirname, "web/build")));

app.set("port", process.env.NODE_SERVER_PORT || 3001);
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors);
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.get("/", function (req, res) {
  응답.sendFile(path.join(__dirname, "/web/build/index.html"));
});

app.get("/api/v1/ping", (req, res) => {
  res.status(200).json({ message: "ok" });
});

require("./src/routes/electricity.routes.js")(app);
require("./src/routes/gas.routes.js")(app);
require("./src/routes/log.routes.js")(app);

app.listen(app.get("port"), () => {
  console.log("server started - port: " + app.get("port"));
});
