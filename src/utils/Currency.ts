export function convertToCurrency(value: number, option = { format: 'en-US', currency: 'USD' }) {
  return value.toLocaleString(option.format, { style: 'currency', currency: option.currency });
}
