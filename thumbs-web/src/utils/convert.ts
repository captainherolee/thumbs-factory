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

export function ConvertStatusString(status: number) {
  switch (status) {
    case 0:
      return '통신정상';
    case 1:
      return '연결 중';
    default:
      return '통신 비정상';
  }
}

export function ConvertBarGraphMax(value: number) {
  return Math.floor(value * 1.3);
}
