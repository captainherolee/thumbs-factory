import { apiClient } from '@utils/client';
import { IGas, IGasStatus } from '@api/types/Gas';

function GasActions() {
  return {
    getGasStatus,
    getGas,
  };

  async function getGasStatus() {
    const response = await apiClient.get<IGasStatus>(`/gas/status`);
    return response.data;
  }
  async function getGas() {
    const response = await apiClient.get<IGas>(`/gas`);
    return response.data;
  }
}

export { GasActions };
