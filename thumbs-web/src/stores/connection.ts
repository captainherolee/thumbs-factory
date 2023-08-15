import { atom } from 'recoil';

export const connectionAtom = atom<number>({
  key: 'isConnected',
  default: 0,
});
