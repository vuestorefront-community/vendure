import { CollectionListOptions, SearchInput } from './GraphQL';

export type TODO = unknown;

export type Setttings = TODO;

export type Endpoints = TODO;

export type BillingAddress = TODO;

export type Cart = TODO;

export type CartItem = TODO;

export type Category = TODO;

export type Coupon = TODO;

export type FacetSearchCriteria = TODO;

export type Review = TODO;

export type ReviewItem = TODO;

export type UserBillingAddress = TODO;

export type UserBillingAddressItem = TODO;

export type UserBillingAddressSearchCriteria = TODO;

export type UserShippingAddress = TODO;

export type UserShippingAddressItem = TODO;

export type UserShippingAddressSearchCriteria = TODO;

export type ShippingAddress = TODO;

export type ShippingProvider = TODO;

export type Wishlist = TODO;

export type WishlistItem = TODO;

export type CollectionParams = {
  options?: CollectionListOptions;
}

export type SearchParams = {
  input?: SearchInput;
}

export type ProductParams = {
  id?: string;
  slug?: string;
}

export type ProductFilter = {
  master: boolean;
};

export type AddToCartParams = {
  productVariantId: string;
  quantity: number;
}
