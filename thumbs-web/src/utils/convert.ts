export function GetStatusColor(status: number) {
  switch (status) {
    case 0:
      return 'red'; // Define your warning color here
    default:
      return '#75FB4C'; // Define your normal color here
  }
}
