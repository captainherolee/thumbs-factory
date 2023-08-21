module.exports = (app) => {
  const gas = require("../controllers/gas.controller.js");
  app.get("/api/v1/gas", gas.all);
  app.get("/api/v1/gas/status", gas.status);
};
