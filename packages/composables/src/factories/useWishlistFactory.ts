import { UseWishlist, CustomQuery, Context, FactoryParams, PlatformApi } from '@vue-storefront/core';
export interface UseWishlistFactoryParams<WISHLIST, WISHLIST_ITEM, AGNOSTIC_PRODUCT_VARIANT, API extends PlatformApi = any> extends FactoryParams<API> {
    load: (context: Context, params: {
        customQuery?: CustomQuery;
    }) => Promise<WISHLIST>;
    addItem: (context: Context, params: {
        currentWishlist: WISHLIST;
        product: AGNOSTIC_PRODUCT_VARIANT;
        customQuery?: CustomQuery;
    }) => Promise<WISHLIST>;
    removeItem: (context: Context, params: {
        currentWishlist: WISHLIST;
        product: WISHLIST_ITEM;
        customQuery?: CustomQuery;
    }) => Promise<WISHLIST>;
    clear: (context: Context, params: {
        currentWishlist: WISHLIST;
    }) => Promise<WISHLIST>;
    isInWishlist: (context: Context, params: {
        currentWishlist: WISHLIST;
        product: AGNOSTIC_PRODUCT_VARIANT;
    }) => boolean;
}
export declare const useWishlistFactory: <WISHLIST, WISHLIST_ITEM, AGNOSTIC_PRODUCT_VARIANT, API extends PlatformApi = any>(factoryParams: UseWishlistFactoryParams<WISHLIST, WISHLIST_ITEM, AGNOSTIC_PRODUCT_VARIANT, API>) => () => UseWishlist<WISHLIST, WISHLIST_ITEM, AGNOSTIC_PRODUCT_VARIANT, API>;
