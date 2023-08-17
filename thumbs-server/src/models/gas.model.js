const sql = require("./db.js");

const Gas = function (gas) {
  this.connectionStatus = gas.G_Connect;
  this.realTimeUsage = gas.G_RealTimeUsage;
  this.monthlyUsage = gas.G_MonthlyUsage;
  this.cumulativeUsage = gas.G_CumulativeUsage;
};

// gas
Gas.get = (result) => {
  sql.query(
    "SELECT G_Connect, G_RealTimeUsage, G_MonthlyUsage, G_CumulativeUsage FROM VIEW",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res && res.length > 0) {
        const gasData = res[0];
        const gas = new Gas(gasData);
        result(null, gas);
      } else {
        result(null, null); // No data found
      }
    }
  );
};

module.exports = Electricity;
