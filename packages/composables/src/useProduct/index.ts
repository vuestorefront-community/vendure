import { useProductFactory, UseProduct, Context, CustomQuery } from '@vue-storefront/core';
import type { ProductVariant, ProductFilter } from '@vue-storefront/vendure-api';

interface SearchParams {
  customQuery?: CustomQuery;
  [key: string]: any;
}

// TODO: add types
const useProductFactoryParams = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  productsSearch: async (context: Context, { customQuery, ...searchParams }: SearchParams): Promise<ProductVariant[]> => {
    const productResponse = await context.$vendure.api.getProduct(searchParams, customQuery);

    const { variants, ...rest } = productResponse?.data?.product;
    const productVariants = variants.map(variant => {
      return {
        _id: variant.id,
        _description: rest.description,
        _categoriesRef: rest.collections.map(collection => collection.id),
        name: variant.name,
        sku: variant.sku,
        slug: rest.slug,
        images: [rest.featuredAsset],
        price: {
          original: variant.priceWithTax,
          current: variant.price
        },
        collections: rest.collections,
        optionGroups: rest.optionGroups,
        featuredAsset: rest.featuredAsset,
        assets: rest.assets
      };
    });

    return productVariants;
  }
};

// TODO: add types
const useProduct: (cacheId: string) => UseProduct<ProductVariant[], ProductFilter> = useProductFactory<ProductVariant[], ProductFilter>(useProductFactoryParams);

export {
  useProduct,
  useProductFactoryParams
};
