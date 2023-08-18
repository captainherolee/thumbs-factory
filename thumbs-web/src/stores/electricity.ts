import { IElectricity, IElectricityDetail } from '@api/types/Electricity';
import { atom } from 'recoil';

const defaultElectricityDetail: IElectricityDetail = {
  rA: 0,
  sA: 0,
  tA: 0,
  nA: 0,
  rV: 0,
  sV: 0,
  tV: 0,
  nV: 0,
};

export const defaultElectricity: IElectricity = {
  connectionStatus: 0,
  mdAlarmSetValue: 0,
  activePower: 0,
  maximumDemand: 0,
  reactivePower: 0,
  cpAlarmSetValue: 0,
  monthlyContractPower: 0,
  monthlyReactivePower: 0,
  monthlyActivePower: 0,
  cumulativeReactivePower: 0,
  cumulativeActivePower: 0,
  electricityDetail: defaultElectricityDetail,
};

export const electricityAtom = atom<IElectricity>({
  key: 'electricityValue',
  default: defaultElectricity,
});
