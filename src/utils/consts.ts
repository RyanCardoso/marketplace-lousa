export const formatNumberTwoLength = (n: number) => {
  return n < 10 ? "0" + n.toString() : n.toString();
};
