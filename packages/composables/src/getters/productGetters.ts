import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import type { ProductVariant, ProductFilter } from '@vue-storefront/vendure-api';

function createPrice(price: number) {
  return price / 100;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getName(product: ProductVariant): string {
  return product.name;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSlug(product: ProductVariant): string {
  return product.slug;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(product: ProductVariant): AgnosticPrice {
  return {
    regular: createPrice(product?.price?.original),
    special: createPrice(product?.price?.current)
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGallery(product: ProductVariant): AgnosticMediaGalleryItem[] {
  return [
    {
      small: product?.images[0],
      normal: product?.images[0],
      big: product?.images[0]
    }
  ];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoverImage(product: ProductVariant): string {
  return product?.images[0];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products: ProductVariant[], filters: ProductFilter): ProductVariant[] {
  const mappedProducts = products.map(product => ({
    _id: product?._id,
    _description: product?._description,
    _categoriesRef: product?._categoriesRef,
    name: product?.name,
    sku: product?.sku,
    slug: product?.slug,
    images: [product?.featuredAsset?.source],
    price: {
      original: product?.price.original,
      current: product?.price.current
    }
  }));

  if (filters.master) {
    return [mappedProducts[0]];
  }

  return mappedProducts;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(products: ProductVariant[] | ProductVariant, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> {
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDescription(product: ProductVariant): string {
  return product?._description;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryIds(product: ProductVariant): string[] {
  return product?._categoriesRef;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(product: ProductVariant): string {
  return product?._id;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: ProductVariant): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(product: ProductVariant): number {
  return 0;
}

function getSku(product: ProductVariant): string {
  return product?.sku;
}

function getCategoryNames(products: ProductVariant[]): string[] {
  return products[0]?.collections.map(collection => collection.name);
}

export const productGetters: ProductGetters<ProductVariant, ProductFilter> = {
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
