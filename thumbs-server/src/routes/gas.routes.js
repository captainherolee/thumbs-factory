module.exports = (app) => {
  const gas = require("../controllers/gas.controller.js");
  app.get("/gas", gas.all);
  app.get("/gas/status", gas.status);
};
