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
import type { Collection, FacetSearchCriteria, PriceRange, SearchInput, SearchResponse, SearchResultSortParameter } from '@vue-storefront/vendure-api';
import { AgnosticProductVariant, AgnosticSearchResult, SearchResultValue } from '../types';
import { ITEMS_PER_PAGE, ROOT_COLLECTION } from '../helpers';

interface ExtendedSearchGetters extends FacetsGetters<AgnosticSearchResult, FacetSearchCriteria> {
  getTree: (category: Collection) => AgnosticCategoryTree | null;
  getBreadcrumbsFromSlug: (searchResult: FacetSearchResult<AgnosticSearchResult>, slug: string) => AgnosticBreadcrumb[]
  getAgnosticSearchResult: (searchResultValue: SearchResultValue<SearchResponse, SearchInput>) => FacetSearchResult<AgnosticSearchResult>;
}

// TODO: Implement search by criteria
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getGrouped = (searchResult: FacetSearchResult<AgnosticSearchResult>, criteria?: string[]): AgnosticGroupedFacet[] => {
  if (!searchResult?.data?.facets) return [];
  const facets = searchResult?.data?.facets;
  return [{
    id: '1',
    label: 'Attributes',
    count: null,
    options: facets?.map(facet => ({
      type: 'attribute',
      id: facet.facetValue.id,
      attrName: facet.facetValue.name,
      value: facet.facetValue.code,
      selected: false,
      count: facet.count
    }))
  }];
};

const getSortOptions = (searchResult: FacetSearchResult<AgnosticSearchResult>): AgnosticSort => {
  // TODO: Fix this with custom type/interface. In Vendure `sort: SearchResultSortParameter` while in VSF Core `sort: string`
  const sortName = (searchResult.input.sort as SearchResultSortParameter).name;
  const options = [
    { type: 'sort', id: 'latest', value: 'Latest', count: null },
    { type: 'sort', id: 'ASC', value: 'Price from low to high', count: null },
    { type: 'sort', id: 'DESC', value: 'Price from high to low', count: null }
  ].map(o => ({ ...o, selected: o.id === sortName }));

  const selected = options.find(o => o.id === sortName)?.id || 'latest';
  return {
    options,
    selected
  };
};

const getProducts = (searchResult: FacetSearchResult<AgnosticSearchResult>): AgnosticProductVariant[] => {
  return searchResult?.data?.products?.length && searchResult.data.products.map(product => ({
    _id: product.productId,
    _variantId: product.productVariantId,
    _description: product.description,
    _categoriesRef: product.collectionIds,
    name: product.productName,
    sku: product.sku,
    images: [product.productAsset.preview],
    price: {
      original: (product.price as PriceRange).min,
      current: (product.priceWithTax as PriceRange).min
    },
    slug: product.slug
  }));
};

const getPagination = (searchResult: FacetSearchResult<AgnosticSearchResult>): AgnosticPagination => {
  if (!searchResult.data?.total) {
    return {
      totalPages: 1,
      totalItems: 1,
      itemsPerPage: 1,
      pageOptions: [1],
      currentPage: 1
    };
  }

  return {
    totalPages: Math.ceil(searchResult?.data?.total / searchResult?.data?.itemsPerPage) || 1,
    totalItems: searchResult?.data?.total || 0,
    itemsPerPage: searchResult?.input?.take,
    pageOptions: searchResult?.data?.perPageOptions,
    currentPage: 1
  };
};

const getBreadcrumbsFromSlug = (searchResult: FacetSearchResult<AgnosticSearchResult>, slug: string): AgnosticBreadcrumb[] => {
  const categoryFromSlug = searchResult?.data?.categories?.find(category => category.collection.slug === slug);

  const breadcrumbsFromSlug = categoryFromSlug?.collection?.breadcrumbs?.map(breadcrumb => ({
    text: breadcrumb?.name === ROOT_COLLECTION ? 'Home' : breadcrumb?.name,
    link: breadcrumb?.slug === ROOT_COLLECTION ? '/' : breadcrumb?.slug
  }));

  return breadcrumbsFromSlug;
};

const getTree = (category: Collection): AgnosticCategoryTree | null => {
  if (!category || !category.id) return null;

  return {
    label: category.name,
    slug: category.slug,
    id: category.id,
    isCurrent: false,
    items: category.children.map(child => getTree(child))
  };
};

const getAgnosticSearchResult = (searchResultValue: SearchResultValue<SearchResponse, SearchInput>): FacetSearchResult<AgnosticSearchResult> => {
  const { data, input } = searchResultValue;
  return {
    data: {
      products: data?.items,
      categories: data?.collections,
      facets: data?.facetValues,
      total: data?.totalItems,
      perPageOptions: ITEMS_PER_PAGE,
      itemsPerPage: input?.take
    },
    input: {
      ...input,
      // In Vendure `sort:{ name: string, price: string }` while in VSF Core `sort: string`
      sort: input.sort as any
    }
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAll = (params: FacetSearchResult<AgnosticSearchResult>, criteria?: FacetSearchCriteria): AgnosticFacet[] => {
  return [];
};

// Not used in favor of getBreadcrumbsBySlug
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getBreadcrumbs = (params: FacetSearchResult<AgnosticSearchResult>): AgnosticBreadcrumb[] => {
  return [];
};

// Not used in favor of getTree
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getCategoryTree = (params: FacetSearchResult<AgnosticSearchResult>): AgnosticCategoryTree => {
  return {
    label: '',
    slug: '',
    items: null,
    isCurrent: false,
    count: 0
  };
};

export const facetGetters: ExtendedSearchGetters = {
  getSortOptions,
  getGrouped,
  getAll,
  getProducts,
  getCategoryTree,
  getBreadcrumbs,
  getPagination,
  getBreadcrumbsFromSlug,
  getTree,
  getAgnosticSearchResult
};
