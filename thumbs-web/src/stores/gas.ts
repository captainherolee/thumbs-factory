import { IGas } from '@api/types/Gas';
import { atom } from 'recoil';

const defaultGas: IGas = {
  connectionStatus: 0,
  realTimeUsage: 0,
  monthlyUsage: 0,
  cumulativeUsage: 0,
};

export const gasAtom = atom<IGas>({
  key: 'gasValue',
  default: defaultGas,
});
