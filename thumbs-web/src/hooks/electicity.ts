import { ElectricActions } from '@api/ElectricityActions';
import { IElectricity, IElectricityStatus } from '@api/types/Electricity';
import { useQuery } from 'react-query';

const useGetElectricity = () => {
  const electricityActions = ElectricActions();
  return useQuery<IElectricity, Error>('query-electricity', async () => electricityActions.getElectricity(), {
    retry: 3,
  });
};

const useGetElectricityStatus = () => {
  const electricityActions = ElectricActions();
  return useQuery<IElectricityStatus, Error>('query-electricityStatus', async () => electricityActions.getElectricityStatus(), {
    retry: 3,
  });
};

export { useGetElectricity, useGetElectricityStatus };
