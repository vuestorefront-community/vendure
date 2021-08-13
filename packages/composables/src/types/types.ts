import { AgnosticAttribute } from "@vue-storefront/core";
import { CollectionResult, FacetValueResult, SearchResult } from "@vue-storefront/vendure-api";

export type TODO = any;

export type UseBillingAddParams = TODO;

export type UseCategorySearchParams = TODO;

export type UseFacetSearchParams = TODO;

export type UseProductSearchParams = TODO;

export type UseReviewSearchParams = TODO;

export type UseReviewAddParams = TODO;

export type UseShippingAddParams = TODO;

export type UseUserUpdateParams = TODO;

export type UseUserRegisterParams = TODO;

export type useUserOrderSearchParams = TODO;

export type AgnosticProductVariant = {
  _id: string,
  _description: string,
  _categoriesRef: string[],
  name: string,
  sku: string,
  slug: string,
  images: string [],
  price: {
    original: number,
    current: number
  },
};

export type AgnosticProductOptions = {
  id?: string,
  value?: string;
  label?: string;
  options?: AgnosticAttribute[]
}

export type AgnosticSearchResult = {
  products: SearchResult[];
  categories: CollectionResult[];
  facets: FacetValueResult[];
  total: number;
  perPageOptions: number[];
  itemsPerPage: number;
}