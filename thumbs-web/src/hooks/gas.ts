import { GasActions } from '@api/GasActions';
import { IGas, IGasStatus } from '@api/types/Gas';
import { useQuery } from 'react-query';

const useGetGas = () => {
  const gasActions = GasActions();
  return useQuery<IGas, Error>('query-gas', async () => gasActions.getGas(), {
    retry: 3,
  });
};

const useGetGasStatus = () => {
  const gasActions = GasActions();
  return useQuery<IGasStatus, Error>('query-gasStatus', async () => gasActions.getGasStatus(), {
    retry: 3,
  });
};

export { useGetGas, useGetGasStatus };
