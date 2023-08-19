const Log = require("../models/log.model.js");

exports.all = (req, res) => {
  Log.get((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving log.",
      });
    else {
      res.send(data);
    }
  });
};
