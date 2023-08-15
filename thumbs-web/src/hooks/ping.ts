import { PingActions } from '@api/PingAction';
import { useQuery } from 'react-query';

const useGetPing = () => {
  const pingActions = PingActions();
  return useQuery<Boolean>('query-ping', async () => pingActions.getPing(), {
    retry: 1,
  });
};

export { useGetPing };
