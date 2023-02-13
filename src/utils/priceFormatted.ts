export const priceFormatted = (price: number) => {
  const priceF = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return priceF;
};
