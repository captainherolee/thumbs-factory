const Gas = require("../models/gas.model.js");

exports.all = (req, res) => {
  Gas.get((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving gas.",
      });
    else res.send(data);
  });
};
