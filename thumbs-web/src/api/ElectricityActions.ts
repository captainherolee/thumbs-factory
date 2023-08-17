import { apiClient } from '@utils/client';
import { IElectricity } from '@api/types/Electricity';

function ElectricActions() {
  return {
    getElectricityStatus,
    getElectricity,
  };

  async function getElectricityStatus() {
    const response = await apiClient.get<number>(`/electricity/status`);
    return response.data;
  }
  async function getElectricity() {
    const response = await apiClient.get<IElectricity>(`/electricity`);
    return response.data;
  }
}

export { ElectricActions };
