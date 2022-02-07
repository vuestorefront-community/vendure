import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters,
  AgnosticBreadcrumb
} from '@vue-storefront/core';
import { getCurrentInstance } from '@vue/composition-api';
import { ProductFilter, Product } from '@vue-storefront/vendure-api';
import { AgnosticProductOptions, AgnosticProductVariant } from '../types';
import { createPrice } from '../helpers/_utils';
import { ROOT_COLLECTION } from '../helpers';

interface ExtendedProductGetters extends ProductGetters<AgnosticProductVariant | Product, ProductFilter> {
  getByFilters: (product: Product, filters?: ProductFilter) => AgnosticProductVariant[] | AgnosticProductVariant;
  getOptions: (product: Product, filters?: string[]) => AgnosticProductOptions[]
  getCategoryNames: (product: Product) => string[];
}
const getInstance = () => {
  const vm = getCurrentInstance();
  return vm?.$root as any;
};
const getName = (product: AgnosticProductVariant): string => {
  return product?.name || product?.productName || '';
};

const getSlug = (product: AgnosticProductVariant): string => {
  return product?.slug || '';
};

const getPrice = (product: AgnosticProductVariant): AgnosticPrice => {
  return {
    regular: createPrice(product?.price?.current || product?.priceWithTax?.value),
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
  return product?.images?.[0] || product?.productAsset?.preview || '';
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
  return product?._id || product?.productId || '';
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
    collections: collections?.map(collection => ({id: collection.id, name: collection.name, breadcrumbs: collection.breadcrumbs})),
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
const getBreadcrumbs = (product: Product): AgnosticBreadcrumb[] => {
  if (!product.collections?.length) return [];
  const collection = product?.collections?.slice(-1);
  const instance = getInstance();

  const getRouteByName = (name: string) => instance?.$router?.options?.routes?.find(route => route?.name === name);

  const homeRouteConfig = getRouteByName('home');
  const categoryRouteConfig = getRouteByName('category');

  // separate the path by slugs to use the segment before the first slug
  const categorySegments = categoryRouteConfig?.path?.split(':');

  const breadcrumbs = collection[0]?.breadcrumbs?.map((breadcrumb) => ({
    text: breadcrumb?.name === ROOT_COLLECTION ? 'Home' : breadcrumb?.name,
    link: breadcrumb?.slug === ROOT_COLLECTION ? homeRouteConfig?.path || '/' : ((categorySegments && categorySegments[0]) || '/c/') + breadcrumb?.slug
  }));
  breadcrumbs.push({
    text: product?.name,
    link: product?.slug
  });
  return breadcrumbs;
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
  getOptions,
  getBreadcrumbs
};
