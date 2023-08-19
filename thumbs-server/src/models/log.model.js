const sql = require("./db.js");
const Log = function (log) {};
Log.get = async (result) => {
  try {
    const query = `
        SELECT time, electricityMaximumDemand, electricityActivePower, electricityReactivePower, gasUsage
        FROM RealTimeData
        ORDER BY time DESC
        LIMIT 60;
      `;

    const rows = await sql.query(query);
    if (rows && rows.length > 0) {
      result(null, rows);
    } else {
      result(null);
    }
  } catch (error) {
    result(error);
  }
};

module.exports = Log;
