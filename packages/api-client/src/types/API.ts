import { CustomQuery } from '@vue-storefront/core';
import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { CollectionList, Order, Product, RemoveOrderItemsResult, SearchResponse, UpdateOrderItemsResult } from './GraphQL';
import { AddToCartParams, CollectionParams, ProductParams, removeFromCartParams, SearchParams } from './types';

export type QueryResponse<K extends string, V> = ApolloQueryResult<Record<K, V>>;
export type MutationResponse<K extends string, V> = FetchResult<Record<K, V>>;
export type RequestDataStructure<K extends string, V> = Record<K, V>;

export type GetProductResponse = QueryResponse<'product', Product>;
export type GetCategoryResponse = QueryResponse<'collections', CollectionList>;
export type GetFacetResponse = QueryResponse<'search', SearchResponse>;
export type GetCartResponse = QueryResponse<'activeOrder', Order>;
export type AddToCartResponse = MutationResponse<'addItemToOrder', UpdateOrderItemsResult>;
export type RemoveFromCartResponse = MutationResponse<'removeOrderLine', RemoveOrderItemsResult>

export interface VendureApiMethods {
  getProduct(params: ProductParams, customQuery?: CustomQuery): Promise<GetProductResponse>;
  getFacet(params: SearchParams, customQuery?: CustomQuery): Promise<GetFacetResponse>;
  getCategory(params: CollectionParams, customQuery?: CustomQuery): Promise<GetCategoryResponse>;
  getCart(customQuery?: CustomQuery): Promise<GetCartResponse>;
  addToCart(params: AddToCartParams, customQuery?: CustomQuery): Promise<AddToCartResponse>;
  removeFromCart(params: removeFromCartParams, customQuery?: CustomQuery): Promise<RemoveFromCartResponse>;
}
