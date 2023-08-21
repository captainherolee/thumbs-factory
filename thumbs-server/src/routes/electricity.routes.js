module.exports = (app) => {
  const electricity = require("../controllers/electricity.controller.js");
  app.get("/api/v1/electricity", electricity.all);
  app.get("/api/v1/electricity/status", electricity.status);
};
