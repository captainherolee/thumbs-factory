import { PingActions } from '@api/PingAction';
import { IPing } from '@api/types/Ping';
import { useQuery } from 'react-query';

const useGetPing = () => {
  const pingActions = PingActions();
  return useQuery<IPing>('query-ping', async () => pingActions.getPing(), {
    retry: 3,
  });
};

export { useGetPing };
