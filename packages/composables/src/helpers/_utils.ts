export const createPrice = (price: number): number => {
  return price ? price / 100 : 0;
};
