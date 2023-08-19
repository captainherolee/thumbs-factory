const sql = require("./db.js");

const ElectricityDetail = {
  rA: 0,
  sA: 0,
  tA: 0,
  nA: 0,
  rV: 0,
  sV: 0,
  tV: 0,
  nV: 0,
};

const Electricity = function (electricity) {
  this.connectionStatus = electricity.E_Connect;
  this.mdAlarmSetValue = electricity.E_AlarmSet_MD;
  this.activePower = electricity.E_ActivePower;
  this.maximumDemand = electricity.E_MaximumDemand;
  this.reactivePower = electricity.E_ReactivePower;
  this.cpAlarmSetValue = electricity.E_AlarmSet_CP;
  this.monthlyContractPower = electricity.E_MonthlyContractPower;
  this.monthlyReactivePower = electricity.E_MonthlyReactivePower;
  this.monthlyActivePower = electricity.E_MonthlyActivePower;
  this.cumulativeReactivePower = electricity.E_CumulativeReactivePower;
  this.cumulativeActivePower = electricity.E_CumulativeActivePower;
  this.electricityDetail = {
    rA: electricity.RA,
    sA: electricity.SA,
    tA: electricity.TA,
    nA: electricity.NA,
    rV: electricity.RV,
    sV: electricity.SV,
    tV: electricity.TV,
    nV: electricity.NV,
  };
};

// electricity
Electricity.get = async (result) => {
  try {
    const rows = await sql.query(
      "SELECT E_Connect, E_AlarmSet_MD, E_ActivePower, E_MaximumDemand, E_ReactivePower, RA, SA, TA, NA, RV, SV, TV, NV, E_AlarmSet_CP, E_MonthlyContractPower, E_MonthlyReactivePower, E_MonthlyActivePower, E_CumulativeReactivePower, E_CumulativeActivePower FROM VIEW"
    );

    if (rows && rows.length > 0) {
      const electricityData = rows[0];
      const electricity = new Electricity(electricityData);
      result(null, electricity);
    } else {
      result(null);
    }
  } catch (error) {
    result(error);
  }
};

Electricity.getStatus = async (result) => {
  try {
    const rows = await sql.query("SELECT E_Connect FROM VIEW");
    if (rows && rows.length > 0) {
      const electricityStatus = rows[0];
      result(null, electricityStatus);
    } else {
      result(null);
    }
  } catch (error) {
    result(error);
  }
};

module.exports = Electricity;
