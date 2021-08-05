import {
  Context,
  useFacetFactory,
  FacetSearchResult,
  IntegrationContext,
} from "@vue-storefront/core";

const factoryParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: async (context: Context, params: FacetSearchResult<any>) => {
    const itemsPerPage = params.input.itemsPerPage
      ? params.input.itemsPerPage
      : 20;

    const productResponse = await context.$vendure.api.getProducts(
      context.$vendure,
      { skip: 0, take: 3 },
      {}
    );

    return {
      items: productResponse?.data,
      total: 0,
      availableFilters: [],
      category: { id: params.input.categoryId },
      availableSortingOptions: [],
      perPageOptions: [10, 20, 50],
      itemsPerPage,
    };
  },
};

export default useFacetFactory<any>(factoryParams);
