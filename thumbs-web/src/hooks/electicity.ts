import { ElectricActions } from '@api/ElectricityActions';
import { IElectricity } from '@api/types/Electricity';
import { useQuery } from 'react-query';

const useGetElectricity = () => {
  const electricityActions = ElectricActions();
  return useQuery<IElectricity, Error>('query-electricity', async () => electricityActions.getElectricity(), {
    retry: 1,
  });
};

const useGetElectricityStatus = () => {
  const electricityActions = ElectricActions();
  return useQuery<number, Error>('query-electricityStatus', async () => electricityActions.getElectricityStatus(), {
    retry: 1,
  });
};

export { useGetElectricity, useGetElectricityStatus };
