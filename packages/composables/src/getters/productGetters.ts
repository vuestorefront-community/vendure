import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import { ProductFilter, Product } from '@vue-storefront/vendure-api';
import { AgnosticProductOptions, AgnosticProductVariant } from '../types';
import { createPrice } from '../helpers/_utils';

interface ExtendedProductGetters extends ProductGetters<AgnosticProductVariant, ProductFilter> {
  getByFilters: (product: Product, filters?: ProductFilter) => AgnosticProductVariant[] | AgnosticProductVariant;
  getOptions: (product: Product, filters?: string[]) => AgnosticProductOptions[]
  getCategoryNames: (product: Product) => string[];
}

const getName = (product: AgnosticProductVariant): string => {
  return product?.name || '';
};

const getSlug = (product: AgnosticProductVariant): string => {
  return product?.slug || '';
};

const getPrice = (product: AgnosticProductVariant): AgnosticPrice => {
  return {
    regular: createPrice(product?.price?.current),
    special: createPrice(product?.price?.original)
  };
};

const getGallery = (product: AgnosticProductVariant): AgnosticMediaGalleryItem[] => {
  if (!product?.images?.length) return [];

  return [
    {
      small: product?.images[0],
      normal: product?.images[0],
      big: product?.images[0]
    }
  ];
};

const getCoverImage = (product: AgnosticProductVariant): string => {
  return product?.images[0] || '';
};

// TODO: Implement filter by attribute functionality
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getOptions = (product: Product, filters?: string[]): AgnosticProductOptions[] => {
  const mappedOptions = product?.optionGroups?.map(optionGroup => {
    const options = optionGroup?.options.map(option => ({
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
  return mappedOptions;
};

const getDescription = (product: AgnosticProductVariant): string => {
  return product?._description || '';
};

const getCategoryIds = (product: AgnosticProductVariant): string[] => {
  return product?._categoriesRef || [];
};

const getId = (product: AgnosticProductVariant): string => {
  return product?._id || '';
};

const getSku = (product: AgnosticProductVariant): string => {
  return product?.sku || '';
};

const getCategoryNames = (product: Product): string[] => {
  if (!product.collections?.length) return [];
  return product?.collections?.map(collection => collection?.name);
};

const getByFilters = (product: Product, filters?: ProductFilter): AgnosticProductVariant[] | AgnosticProductVariant => {
  const { variants, collections, featuredAsset, ...masterVariant } = product;

  if (!variants?.length) return [];

  const productVariants = variants.map(variant => ({
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

  if (filters?.master) {
    return productVariants[0];
  }

  if (filters?.id) {
    return productVariants.find(variant => variant._id === filters?.id);
  }

  return productVariants;
};

// Not used in favor of getByFilters
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getFiltered = (products: AgnosticProductVariant[], filters: ProductFilter): AgnosticProductVariant[] => {
  return [];
};

// Not used in favor of getOptions
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAttributes = (products: AgnosticProductVariant[] | AgnosticProductVariant, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> => {
  return {
    id: '1',
    name: '1',
    code: '1',
    options: 'options'
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getFormattedPrice = (price: number): string => {
  return '';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getTotalReviews = (product: AgnosticProductVariant): number => {
  return 0;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAverageRating = (product: AgnosticProductVariant): number => {
  return 0;
};

export const productGetters: ExtendedProductGetters = {
  getName,
  getSlug,
  getPrice,
  getGallery,
  getCoverImage,
  getFiltered,
  getAttributes,
  getDescription,
  getCategoryIds,
  getId,
  getFormattedPrice,
  getTotalReviews,
  getAverageRating,
  getSku,
  getCategoryNames,
  getByFilters,
  getOptions
};
