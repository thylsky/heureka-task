export const getLang = () => {
  if (navigator.languages !== undefined) return navigator.languages[0];

  return navigator.language;
};

export const formatAmount = (amount: number, currency: string): string => {
  const isNegative = amount < 0;

  const formatValue = Math.abs(amount).toLocaleString(getLang(), {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol',
  });

  return `${isNegative ? '-' : ''}${formatValue}`;
};
