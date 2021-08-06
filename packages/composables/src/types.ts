import {
  ProductsSearchParams,
  CustomQuery
} from '@vue-storefront/core';

enum SortOrder {
  ASC,
  DESC
}

export type TODO = any;

export type UseBillingAddParams = TODO;

export type UseCategorySearchParams = {
  customQuery?: CustomQuery;
  searchParams?: {
    skip?: number;
    take?: number;
    sort?: {
      id: SortOrder
      createdAt: SortOrder
      updatedAt: SortOrder
      name: SortOrder
      slug: SortOrder
      position: SortOrder
      description: SortOrder
    }
    filter?: {
      createdAt: Date;
      updatedAt: Date;
      languageCode: string;
      name: string;
      slug: string;
      position: number;
      description: string;
    }
  }
};

export type UseFacetSearchParams = TODO;

export type UseProductSearchParams = ProductsSearchParams;

export type UseReviewSearchParams = TODO;

export type UseReviewAddParams = TODO;

export type UseShippingAddParams = TODO;

export type UseUserUpdateParams = TODO;

export type UseUserRegisterParams = TODO;

export type useUserOrderSearchParams = TODO;
