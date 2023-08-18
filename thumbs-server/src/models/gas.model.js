const sql = require("./db.js");

const Gas = function (gas) {
  this.connectionStatus = gas.G_Connect;
  this.realTimeUsage = gas.G_RealTimeUsage;
  this.monthlyUsage = gas.G_MonthlyUsage;
  this.cumulativeUsage = gas.G_CumulativeUsage;
};

Gas.get = async (result) => {
  const rows = await sql.query(
    "SELECT G_Connect, G_RealTimeUsage, G_MonthlyUsage, G_CumulativeUsage FROM VIEW"
  );

  if (rows && rows.length > 0) {
    const gasData = rows[0];
    const gas = new Gas(gasData);
    result(null, gas);
  } else {
    result(null);
  }
};

Gas.getStatus = async (result) => {
  const rows = await sql.query("SELECT G_Connect FROM VIEW");

  if (rows && rows.length > 0) {
    const gasStatus = rows[0];
    result(null, gasStatus);
  } else {
    result(null);
  }
};

module.exports = Gas;
