const Electricity = require("../models/electricity.model.js");

exports.all = (req, res) => {
  Electricity.get((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving electricity.",
      });
    else res.send(data);
  });
};

exports.status = (req, res) => {
  Electricity.getStatus((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving gas.",
      });
    else {
      res.send(data);
    }
  });
};
