import { StatusColorError, StatusColorLoading, StatusColorNormal } from './constant';

export function GetStatusColor(status: number) {
  switch (status) {
    case 0:
      return StatusColorError;
    case 1:
      return StatusColorNormal;
    default:
      return StatusColorLoading;
  }
}
