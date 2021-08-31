import { Product, ProductVariant } from '@vue-storefront/vendure-api';

// TODO: Refactor logic and probably move to getter
export const getProductVariantByConfiguration = (product: Product, configuration: unknown): ProductVariant => {
  if (!product || !configuration) return;

  const productVariants = product?.variants?.filter(variant => {
    const configurationValues = Object.values(configuration);

    const configurationOptions = variant?.options?.map(option => configurationValues?.filter(value => value === option?.code));

    const isConfigurationLengthEqualToOptions = configurationOptions.flat().length === variant?.options.length && configurationOptions.flat().length === configurationValues.length;

    return isConfigurationLengthEqualToOptions ? variant : null;
  });

  return productVariants[0];
};
