import { CustomQuery } from '@vue-storefront/core';
import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { ActiveOrderResult, ApplyCouponCodeResult, CollectionList, CreateCustomerInput, Customer, NativeAuthenticationResult, Order, PaymentInput, PaymentMethodQuote, Product, RegisterCustomerAccountResult, RegisterCustomerInput, RemoveOrderItemsResult, SearchResponse, SetCustomerForOrderResult, ShippingMethodQuote, Success, UpdateOrderItemsResult } from './GraphQL';
import { AddToCartParams, CartCouponParams, CollectionParams, LoginParams, ProductParams, RemoveFromCartParams, SearchParams, SetShippingMethodParams, TransitionOrderToStateParams, UpdateAddressDetailsParams, UpdateCartParams } from './types';

export type QueryResponse<K extends string, V> = ApolloQueryResult<Record<K, V>>;
export type MutationResponse<K extends string, V> = FetchResult<Record<K, V>>;
export type RequestDataStructure<K extends string, V> = Record<K, V>;

export type GetProductResponse = QueryResponse<'product', Product>;
export type GetCategoryResponse = QueryResponse<'collections', CollectionList>;
export type GetFacetResponse = QueryResponse<'search', SearchResponse>;
export type GetCartResponse = QueryResponse<'activeOrder', Order>;
export type GetMeResponse = QueryResponse<'activeCustomer', Customer>;
export type GetShippingMethodsResponse = QueryResponse<'eligibleShippingMethods', ShippingMethodQuote[]>;
export type GetPaymentMethodsResponse = QueryResponse<'eligiblePaymentMethods', PaymentMethodQuote[]>;
export type AddToCartResponse = MutationResponse<'addItemToOrder', UpdateOrderItemsResult>;
export type RemoveFromCartResponse = MutationResponse<'removeOrderLine', RemoveOrderItemsResult>;
export type UpdateCartQuantityResponse = MutationResponse<'adjustOrderLine', UpdateOrderItemsResult>;
export type ApplyCouponCodeResponse = MutationResponse<'applyCouponCode', ApplyCouponCodeResult>;
export type RemoveCouponCodeResponse = MutationResponse<'removeCouponCode', Order>;
export type UpdateAddressDetailsResponse = MutationResponse<'setOrderShippingAddress' | 'setOrderBillingAddress', ActiveOrderResult>;
export type SetShippingMethodResponse = MutationResponse<'setOrderShippingMethod', Order>;
export type SetPaymentMethodResponse = MutationResponse<'setPaymentShippingMethod', Order>;
export type TransitionOrderToState = MutationResponse<'transitionOrderToState', Order>;
export type SetCustomerForOrderResponse = MutationResponse<'setCustomerForOrder', SetCustomerForOrderResult>;
export type RegisterCustomerAccountResponse = MutationResponse<'registerCustomerAccount', RegisterCustomerAccountResult>;
export type LoginResponse = MutationResponse<'login', NativeAuthenticationResult>;
export type LogoutResponse = MutationResponse<'logout', Success>;

export interface VendureApiMethods {
  getProduct(params: ProductParams, customQuery?: CustomQuery): Promise<GetProductResponse>;
  getFacet(params: SearchParams, customQuery?: CustomQuery): Promise<GetFacetResponse>;
  getCategory(params: CollectionParams, customQuery?: CustomQuery): Promise<GetCategoryResponse>;
  getCart(customQuery?: CustomQuery): Promise<GetCartResponse>;
  getMe(customQuery?: CustomQuery): Promise<GetMeResponse>;
  getShippingMethods(customQuery?: CustomQuery): Promise<GetShippingMethodsResponse>;
  getPaymentMethods(customQuery?: CustomQuery): Promise<GetPaymentMethodsResponse>;
  addToCart(params: AddToCartParams, customQuery?: CustomQuery): Promise<AddToCartResponse>;
  removeFromCart(params: RemoveFromCartParams, customQuery?: CustomQuery): Promise<RemoveFromCartResponse>;
  updateCartQuantity(params: UpdateCartParams, customQuery?: CustomQuery): Promise<UpdateCartQuantityResponse>;
  applyCartCoupon(params: CartCouponParams, customQuery?: CustomQuery): Promise<ApplyCouponCodeResponse>;
  removeCartCoupon(params: CartCouponParams, customQuery?: CustomQuery): Promise<RemoveCouponCodeResponse>;
  updateAddressDetails(params: UpdateAddressDetailsParams, customQuery?: CustomQuery): Promise<UpdateAddressDetailsResponse>;
  setShippingMethod(params: SetShippingMethodParams, customQuery?: CustomQuery): Promise<SetShippingMethodResponse>;
  setPaymentMethod(params: PaymentInput, customQuery?: CustomQuery): Promise<SetPaymentMethodResponse>;
  transitionOrderToState(params: TransitionOrderToStateParams, customQuery?: CustomQuery): Promise<TransitionOrderToState>;
  setCustomerForOrder(params: CreateCustomerInput, customQuery?: CustomQuery): Promise<SetCustomerForOrderResponse>;
  registerCustomerAccount(params: RegisterCustomerInput, customQuery?: CustomQuery): Promise<RegisterCustomerAccountResponse>;
  login(params: LoginParams, customQuery?: CustomQuery): Promise<LoginResponse>;
  logout(customQuery?: CustomQuery): Promise<LogoutResponse>;
}
