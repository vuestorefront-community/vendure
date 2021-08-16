import { Product } from '@vue-storefront/vendure-api';
import { AgnosticProductOptions, AgnosticProductVariant } from '@vue-storefront/vendure';

export const getAgnosticProductVariants = (product: Product): AgnosticProductVariant[] => {
  const { variants, collections, featuredAsset, ...masterVariant } = product;

  if (!variants?.length) return [];

  const agnosticProductVariants = variants.map(variant => ({
    _id: variant?.id,
    _description: masterVariant?.description,
    _categoriesRef: collections?.map(collection => collection.id),
    name: variant?.name,
    sku: variant?.sku,
    slug: masterVariant?.slug,
    images: [featuredAsset?.preview],
    price: {
      original: variant?.price,
      current: variant?.priceWithTax
    }
  }));

  return agnosticProductVariants;
};

export const getAgnosticProductOptions = (product: Product): AgnosticProductOptions[] => {
  const agnosticProductOptions = product?.optionGroups?.map(optionGroup => {
    const options = optionGroup?.options?.map(option => ({
      id: option?.id,
      value: option?.code,
      label: option?.name
    }));

    return {
      id: optionGroup?.id,
      value: optionGroup?.code,
      label: optionGroup?.name,
      options
    };
  });

  return agnosticProductOptions;
};
