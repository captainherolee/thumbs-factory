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
  mdAlarmSetValue: 60,
  activePower: 1500,
  maximumDemand: 5000,
  reactivePower: 0,
  cpAlarmSetValue: 60,
  monthlyContractPower: 100,
  monthlyReactivePower: 60,
  monthlyActivePower: 0,
  cumulativeReactivePower: 0,
  cumulativeActivePower: 0,
  detail: defaultElectricityDetail,
};

export const electricityAtom = atom<IElectricity>({
  key: 'electricityValue',
  default: defaultElectricity,
});
