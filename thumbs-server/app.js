const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.set("port", process.env.SERVER_PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/ping", (req, res) => {
  res.json({ message: "ok" });
});

require("./src/routes/electricity.routes.js")(app);
require("./src/routes/gas.routes.js")(app);
require("./src/routes/log.routes.js")(app);

app.listen(app.get("port"), () => {
  console.log("server started - port: " + app.get("port"));
});
