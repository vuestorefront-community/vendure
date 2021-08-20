import { CustomQuery } from '@vue-storefront/core';
import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { ActiveOrderResult, ApplyCouponCodeResult, CollectionList, Customer, Order, Product, RemoveOrderItemsResult, SearchResponse, UpdateOrderItemsResult } from './GraphQL';
import { AddToCartParams, CartCouponParams, CollectionParams, ProductParams, RemoveFromCartParams, SearchParams, UpdateAddressDetailsParams, UpdateCartParams } from './types';

export type QueryResponse<K extends string, V> = ApolloQueryResult<Record<K, V>>;
export type MutationResponse<K extends string, V> = FetchResult<Record<K, V>>;
export type RequestDataStructure<K extends string, V> = Record<K, V>;

export type GetProductResponse = QueryResponse<'product', Product>;
export type GetCategoryResponse = QueryResponse<'collections', CollectionList>;
export type GetFacetResponse = QueryResponse<'search', SearchResponse>;
export type GetCartResponse = QueryResponse<'activeOrder', Order>;
export type GetMeResponse = QueryResponse<'activeCustomer', Customer>;
export type AddToCartResponse = MutationResponse<'addItemToOrder', UpdateOrderItemsResult>;
export type RemoveFromCartResponse = MutationResponse<'removeOrderLine', RemoveOrderItemsResult>;
export type UpdateCartQuantityResponse = MutationResponse<'adjustOrderLine', UpdateOrderItemsResult>;
export type ApplyCouponCodeResponse = MutationResponse<'applyCouponCode', ApplyCouponCodeResult>;
export type RemoveCouponCodeResponse = MutationResponse<'removeCouponCode', Order>;
export type UpdateAddressDetailsResponse = MutationResponse<'setOrderShippingAddress' | 'setOrderBilliingAddress', ActiveOrderResult>;

export interface VendureApiMethods {
  getProduct(params: ProductParams, customQuery?: CustomQuery): Promise<GetProductResponse>;
  getFacet(params: SearchParams, customQuery?: CustomQuery): Promise<GetFacetResponse>;
  getCategory(params: CollectionParams, customQuery?: CustomQuery): Promise<GetCategoryResponse>;
  getCart(customQuery?: CustomQuery): Promise<GetCartResponse>;
  getMe(customQuery?: CustomQuery): Promise<GetMeResponse>;
  addToCart(params: AddToCartParams, customQuery?: CustomQuery): Promise<AddToCartResponse>;
  removeFromCart(params: RemoveFromCartParams, customQuery?: CustomQuery): Promise<RemoveFromCartResponse>;
  updateCartQuantity(params: UpdateCartParams, customQuery?: CustomQuery): Promise<UpdateCartQuantityResponse>;
  applyCouponCode(params: CartCouponParams, customQuery?: CustomQuery): Promise<ApplyCouponCodeResponse>;
  removeCouponCode(params: CartCouponParams, customQuery?: CustomQuery): Promise<RemoveCouponCodeResponse>;
  updateAddressDetails(params: UpdateAddressDetailsParams, customQuery?: CustomQuery): Promise<UpdateAddressDetailsResponse>;
}
