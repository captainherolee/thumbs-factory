module.exports = (app) => {
  const electricity = require("../controllers/electricity.controller.js");
  app.get("/electricity", electricity.all);
};
