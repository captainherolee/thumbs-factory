module.exports = (app) => {
  const log = require("../controllers/log.controller.js");
  app.get("/api/v1/log", log.all);
};
