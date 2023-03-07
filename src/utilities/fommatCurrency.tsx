const CURRENCY_FOMMATER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
export default function fommatCurrency(number: number) {
  return CURRENCY_FOMMATER.format(number);
}
