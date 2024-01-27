export const formatPrice = (price: number) => {
  const { format } = Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'GBP',
  });

  return format(price);
};
