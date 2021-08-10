import { useProductFactory, UseProduct, Context, CustomQuery } from '@vue-storefront/core';
import type { Product, ProductFilter } from '@vue-storefront/vendure-api';

interface SearchParams {
  customQuery?: CustomQuery;
  [key: string]: any;
}

const useProductFactoryParams = {
  productsSearch: async (context: Context, { customQuery, ...searchParams }: SearchParams): Promise<Product[]> => {
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
          original: variant.price,
          current: variant.priceWithTax
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

const useProduct: (cacheId: string) => UseProduct<Product[], ProductFilter> = useProductFactory<Product[], ProductFilter>(useProductFactoryParams);

export {
  useProduct,
  useProductFactoryParams
};
