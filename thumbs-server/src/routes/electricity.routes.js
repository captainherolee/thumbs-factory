module.exports = (app) => {
  console.log("here");
  const electricity = require("../controllers/electricity.controller.js");
  app.get("/electricity", electricity.all);
};
