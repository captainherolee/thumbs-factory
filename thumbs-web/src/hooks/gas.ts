import { GasActions } from '@api/GasActions';
import { IGas } from '@api/types/Gas';
import { useQuery } from 'react-query';

const useGetGas = () => {
  const gasActions = GasActions();
  return useQuery<IGas, Error>('query-gas', async () => gasActions.getGas(), {
    retry: 1,
  });
};

const useGetGasStatus = () => {
  const gasActions = GasActions();
  return useQuery<number, Error>('query-gasStatus', async () => gasActions.getGasStatus(), {
    retry: 1,
  });
};

export { useGetGas, useGetGasStatus };
