// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getShippingMethodPrice = (shippingMethod, total: number): number => {
  const centAmount = shippingMethod?.zoneRates[0].shippingRates[0].freeAbove?.centAmount;
  if (centAmount && total >= (centAmount / 100)) {
    return 0;
  }
  return shippingMethod.zoneRates[0].shippingRates[0].price.centAmount / 100;
};
