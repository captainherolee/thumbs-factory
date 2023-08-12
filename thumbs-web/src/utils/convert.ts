export function GetStatusColor(status: string) {
  switch (status) {
    case 'warning':
      return 'red'; // Define your warning color here
    default:
      return '#75FB4C'; // Define your normal color here
  }
}
