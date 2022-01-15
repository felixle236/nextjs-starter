export function convertMonthToWord(month: number) {
  if (month >= 1 && month <= 12) {
    const words = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return words[month - 1];
  }
  return '';
}

export function convertToString(date: Date, option: Intl.DateTimeFormatOptions = { hour12: false }) {
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], option);
}

export function convertToDateString(date: Date, option: Intl.DateTimeFormatOptions = { hour12: false }) {
  return date.toLocaleDateString([], option);
}

export function convertToTimeString(date: Date, option: Intl.DateTimeFormatOptions = { hour12: false }) {
  return date.toLocaleTimeString([], option);
}
