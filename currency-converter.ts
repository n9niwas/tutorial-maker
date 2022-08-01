const uahExchangeRate: number = 35.5;

function convertFromUsdToUah(dollarAmount: number) {
  return dollarAmount * uahExchangeRate;
}

function convertFromUahToUsd(uahAmount: number) {
  return uahAmount / uahExchangeRate;
}

function convertCurrency(from: string, to: string, amount: number) {
  if (from === 'uah' && to === 'usd') {
    return convertFromUahToUsd(amount);
  }

  return convertFromUsdToUah(amount);
}

console.log('usd -> uah:', convertCurrency('usd', 'uah', 100));
console.log('uah -> usd:', convertCurrency('uah', 'usd', 100));
