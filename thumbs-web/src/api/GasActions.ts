import { apiClient } from '@utils/client';
import { IGas } from '@api/types/Gas';

function GasActions() {
  return {
    getGasStatus,
    getGas,
  };

  async function getGasStatus() {
    const response = await apiClient.get<number>(`/api/v1/gas/status`);
    return response.data;
  }
  async function getGas() {
    const response = await apiClient.get<IGas>(`/api/v1/gas`);
    return response.data;
  }
}

export { GasActions };
