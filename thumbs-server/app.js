const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/ping", (req, res) => {
  res.json({ message: "ok" });
});

require("./src/routes/electricity.routes.js")(app);
require("./src/routes/gas.routes.js")(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
