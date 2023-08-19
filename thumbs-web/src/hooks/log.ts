import { LogActions } from '@api/LogActions';
import { ILog } from '@api/types/Log';
import { useQuery } from 'react-query';

const useGetLog = () => {
  const logActions = LogActions();
  return useQuery<ILog[], Error>('query-log', async () => logActions.getLog(), {
    retry: 3,
  });
};

export { useGetLog };
