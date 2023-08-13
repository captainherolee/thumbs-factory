export interface IElectricity {
  connectionStatus: number;
  mdAlarmSetValue: string;
  activePower: number;
  maximumDemand: number;
  reactivePower: number;
  cpAlarmSetValue: number;
  monthlyContractPower: number;
  monthlyReactivePower: number;
  monthlyActivePower: number;
  cumulativeReactivePower: number;
  cumulativeActivePower: number;
  detail: IElectricity;
}

export interface IElectricityDetail {
  rA: number;
  sA: number;
  tA: number;
  nA: number;
  rV: number;
  sV: number;
  tV: number;
  nV: number;
}
