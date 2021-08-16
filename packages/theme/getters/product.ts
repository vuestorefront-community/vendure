import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import { ProductFilter, Product } from '@vue-storefront/vendure-api';
import { AgnosticProductOptions, AgnosticProductVariant } from '@vue-storefront/vendure';
import { createPrice } from '../helpers';
import { getAgnosticProductOptions, getAgnosticProductVariants } from '../mappers';

interface ExtendedProductGetters extends ProductGetters<AgnosticProductVariant, ProductFilter> {
  getByFilters: (product: Product, filters?: ProductFilter) => AgnosticProductVariant[] | AgnosticProductVariant;
  getOptions: (product: Product, filters?: string[]) => AgnosticProductOptions[]
  getCategoryNames: (product: Product) => string[];
}

const getName = (productVariant: AgnosticProductVariant): string => {
  return productVariant?.name || '';
};

const getSlug = (productVariant: AgnosticProductVariant): string => {
  return productVariant?.slug || '';
};

const getPrice = (productVariant: AgnosticProductVariant): AgnosticPrice => {
  return {
    regular: createPrice(productVariant?.price?.original),
    special: createPrice(productVariant?.price?.current)
  };
};

const getGallery = (productVariant: AgnosticProductVariant): AgnosticMediaGalleryItem[] => {
  if (!productVariant?.images?.length) return [];

  return [
    {
      small: productVariant?.images[0],
      normal: productVariant?.images[0],
      big: productVariant?.images[0]
    }
  ];
};

const getCoverImage = (productVariant: AgnosticProductVariant): string => {
  return productVariant?.images[0] || '';
};

// TODO: Implement filter by attribute functionality
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getOptions = (product: Product, filters?: string[]): AgnosticProductOptions[] => {
  const productOptions = getAgnosticProductOptions(product);

  return productOptions;
};

const getDescription = (productVariant: AgnosticProductVariant): string => {
  return productVariant?._description || '';
};

const getCategoryIds = (productVariant: AgnosticProductVariant): string[] => {
  return productVariant?._categoriesRef || [];
};

const getId = (productVariant: AgnosticProductVariant): string => {
  return productVariant?._id || '';
};

const getSku = (productVariant: AgnosticProductVariant): string => {
  return productVariant?.sku || '';
};

const getCategoryNames = (product: Product): string[] => {
  if (!product.collections?.length) return [];
  return product?.collections?.map(collection => collection?.name);
};

const getByFilters = (product: Product, filters?: ProductFilter): AgnosticProductVariant[] | AgnosticProductVariant => {
  const productVariants = getAgnosticProductVariants(product);

  if (filters?.master) {
    return productVariants[0];
  }

  return productVariants;
};

// Not used in favor of getByFilters
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getFiltered = (productVariants: AgnosticProductVariant[], filters: ProductFilter): AgnosticProductVariant[] => {
  return [];
};

// Not used in favor of getOptions
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAttributes = (productVariants: AgnosticProductVariant[] | AgnosticProductVariant, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> => {
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
const getTotalReviews = (productVariant: AgnosticProductVariant): number => {
  return 0;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAverageRating = (productVariant: AgnosticProductVariant): number => {
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
