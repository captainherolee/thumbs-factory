import { apiClient } from '@utils/client';
import { IPing } from './types/Ping';

function PingActions() {
  return {
    getPing,
  };

  async function getPing() {
    const response = await apiClient.get<IPing>(`/ping`);
    return response.data;
  }
}

export { PingActions };
