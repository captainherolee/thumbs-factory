import { apiClient } from '@utils/client';

function PingActions() {
  return {
    getPing,
  };

  async function getPing() {
    const response = await apiClient.get<Boolean>(`/api/v1/ping`);
    return response.data;
  }
}

export { PingActions };
