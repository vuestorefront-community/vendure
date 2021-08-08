import {
  FacetsGetters,
  FacetSearchResult,
  AgnosticCategoryTree,
  AgnosticGroupedFacet,
  AgnosticPagination,
  AgnosticSort,
  AgnosticBreadcrumb,
  AgnosticFacet
} from '@vue-storefront/core';
import type { FacetResultsData, FacetSearchCriteria } from '@vue-storefront/vendure-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAll(params: FacetSearchResult<FacetResultsData>, criteria?: FacetSearchCriteria): AgnosticFacet[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGrouped(params: FacetSearchResult<FacetResultsData>, criteria?: FacetSearchCriteria): AgnosticGroupedFacet[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSortOptions(params: FacetSearchResult<FacetResultsData>): AgnosticSort {
  return {
    options: [],
    selected: ''
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryTree(params: FacetSearchResult<FacetResultsData>): AgnosticCategoryTree {
  return {
    label: '',
    slug: '',
    items: null,
    isCurrent: false,
    count: 0
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getProducts(params: FacetSearchResult<FacetResultsData>): any {
  return params?.data?.products?.length && params.data.products.map(product => ({
    _id: product.productId,
    _description: product.description,
    _categoriesRef: product.collectionIds,
    name: product.productName,
    sku: product.sku,
    images: [product.productAsset.preview],
    price: {
      original: product.price.value,
      current: product.priceWithTax.value
    },
    slug: product.slug
  }));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPagination(searchData: FacetSearchResult<FacetResultsData>): AgnosticPagination {
  if (!searchData.data) {
    return {
      totalPages: 1,
      totalItems: 1,
      itemsPerPage: 1,
      pageOptions: [1],
      currentPage: 1
    };
  }

  return {
    totalPages: Math.ceil(searchData.data.total / searchData.data.itemsPerPage),
    totalItems: searchData.data.total,
    itemsPerPage: searchData.input.input.take,
    pageOptions: searchData.data.perPageOptions,
    currentPage: 1
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBreadcrumbs(params: FacetSearchResult<FacetResultsData>): AgnosticBreadcrumb[] {
  return [];
}

export const facetGetters: FacetsGetters<FacetResultsData, FacetSearchCriteria> = {
  getSortOptions,
  getGrouped,
  getAll,
  getProducts,
  getCategoryTree,
  getBreadcrumbs,
  getPagination
};
