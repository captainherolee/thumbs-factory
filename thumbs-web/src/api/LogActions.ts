import { apiClient } from '@utils/client';
import { ILog } from '@api/types/Log';

function LogActions() {
  return {
    getLog,
  };

  async function getLog() {
    const response = await apiClient.get<ILog[]>(`/log`);
    return response.data;
  }
}

export { LogActions };
