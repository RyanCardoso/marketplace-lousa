export const formatNumberTwoLength = (n: number) => {
  return n < 10 ? "0" + n.toString() : n.toString();
};

export const formatMoney = (price: number) => {
  return price?.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
