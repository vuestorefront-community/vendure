import { Product } from "./GraphQL";

export type TODO = unknown;

// export type Config = {
//   api: {
//     uri: string;
//     tokenMethod: string;
//   };
//   currency: string;
//   lang: string;
// }

export type Setttings = TODO;

export type Endpoints = TODO;

export type BillingAddress = TODO;

export type Cart = TODO;

export type CartItem = TODO;

export type Category = TODO;

export type Coupon = TODO;

// export type Facet = TODO;

export type FacetSearchCriteria = TODO;

// export type Order = TODO;

// export type OrderItem = TODO;

export type ProductAsset = {
  source: string;
  [key: string]: string
}

export type ProductOptions = {
  id: string;
  name: string;
  code: string;
  [key: string]: string
}

export type ProductOptionGroups = {
  id: string;
  name: string;
  code: string;
  options: ProductOptions[];
}

export type ProductCollections = {
  id: string;
  name: string;
  [key: string]: string
}

// export type Product = {
//   _id: string;
//   _description: string;
//   _categoriesRef: string[];
//   name: string;
//   sku: string;
//   slug: string;
//   images: string[];
//   price: {
//     original: number;
//     current: number;
//   };
//   collections?: ProductCollections[];
//   optionGroups?: ProductOptionGroups[];
//   featuredAsset?: ProductAsset;
//   assets?: ProductAsset[];
//   [key: string]: any;
// }

export type ProductData = {
  data: {
    product: {
      variants: Product[];
      slug: string;
      description: string;
      collections?: ProductCollections[];
      optionGroups?: ProductOptionGroups[];
      featuredAsset?: ProductAsset;
      assets?: ProductAsset[];
    }
  }
}

export type ProductFilter = {
  master: boolean;
};

export type CollectionItem = {
  id: string;
  name: string;
  breadcrumbs: {
    name: string;
    slug: string;
  }
  slug: string;
  parent?: CollectionItem
  children?: CollectionItem[]
}

export type CategoryData = {
  data: {
    collections: CollectionItem[]
  }
}

// export type Collection = {
//   items: CollectionItem[];
//   totalItems: number;
// }

enum SortOrder {
  ASC,
  DESC
}

export type CategoryParams = {
  options?: {
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
}

export type CategoryNavigation = {
  name: string;
  link: string;
}

export type SearchInputParams = {
  collectionSlug?: string;
  groupByProduct?: boolean;
  take? : number;
  [key: string]: any;
}

export type FacetData = {
  data: {
    collections: CollectionItem[];
    totalItems: number;
    // TODO: replace with types from extracted API types
    facetValues: any;
    items: any
  }
}

export type SearchProduct = {
  productId: string;
  slug: string;
  sku: string;
  productVariantId: string;
  collectionIds: string[];
  description: string;
  productName: string;
  currencyCode: string;
  productAsset: {
    preview: string
  };
  price: {
    min: number;
  };
  priceWithTax: {
    min: number;
  }
}

export interface FacetResultsData {
  products: SearchProduct[];
  categories: CollectionItem[];
  facets: any;
  total: number;
  perPageOptions: number[];
  itemsPerPage: number;
}

export type Review = TODO;

export type ReviewItem = TODO;

// export type User = TODO;

export type UserBillingAddress = TODO;

export type UserBillingAddressItem = TODO;

export type UserBillingAddressSearchCriteria = TODO;

export type UserShippingAddress = TODO;

export type UserShippingAddressItem = TODO;

export type UserShippingAddressSearchCriteria = TODO;

export type ShippingAddress = TODO;

// export type ShippingMethod = TODO;

export type ShippingProvider = TODO;

export type Wishlist = TODO;

export type WishlistItem = TODO;
