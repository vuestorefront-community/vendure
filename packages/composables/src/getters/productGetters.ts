import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import { ProductVariantType, ProductFilter } from '@vue-storefront/vendure-api';
import { createPrice } from './_utils';

function getName(product: ProductVariantType): string {
  return product?.name || '';
}

function getSlug(product: ProductVariantType): string {
  return product?.slug || '';
}

function getPrice(product: ProductVariantType): AgnosticPrice {
  return {
    regular: createPrice(product?.price?.original),
    special: createPrice(product?.price?.current)
  };
}

function getGallery(product: ProductVariantType): AgnosticMediaGalleryItem[] {
  if (!product?.images.length) return [];

  return [
    {
      small: product?.images[0],
      normal: product?.images[0],
      big: product?.images[0]
    }
  ];
}

function getCoverImage(product: ProductVariantType): string {
  return product?.images[0] || '';
}

function getFiltered(products: ProductVariantType[], filters: ProductFilter): ProductVariantType[] {
  if (!products?.length) return [];

  const mappedProducts = products.map(product => ({
    _id: product?._id,
    _description: product?._description,
    _categoriesRef: product?._categoriesRef,
    name: product?.name,
    sku: product?.sku,
    slug: product?.slug,
    images: [product?.featuredAsset?.preview],
    price: {
      original: product?.price?.original,
      current: product?.price?.current
    }
  }));

  if (filters?.master) {
    return [mappedProducts[0]];
  }

  return mappedProducts;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(products: ProductVariantType[] | ProductVariantType, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> {
  const mappedOptions = products[0]?.optionGroups.map(optionGroup => {
    const options = optionGroup.options.map(option => ({
      id: option.id,
      value: option.code,
      label: option.name
    }));

    return {
      id: optionGroup.id,
      name: optionGroup.name,
      code: optionGroup.code,
      options
    };
  });
  return mappedOptions;
}

function getDescription(product: ProductVariantType): string {
  return product?._description || '';
}

function getCategoryIds(product: ProductVariantType): string[] {
  return product?._categoriesRef || [];
}

function getId(product: ProductVariantType): string {
  return product?._id || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: ProductVariantType): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(product: ProductVariantType): number {
  return 0;
}

function getSku(product: ProductVariantType): string {
  return product?.sku || '';
}

function getCategoryNames(products: ProductVariantType[]): string[] {
  if (!products.length || !products[0].collections.length) return [];
  return products[0]?.collections.map(collection => collection.name);
}

export const productGetters: ProductGetters<ProductVariantType, ProductFilter> = {
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
  getCategoryNames
};
