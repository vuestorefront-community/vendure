import { CustomQuery } from "@vue-storefront/core";
import { ApolloQueryResult } from "apollo-client";
import { CollectionList, Product, SearchResponse } from "./GraphQL";
import { CollectionParams, ProductParams, SearchParams } from "./types";

export interface VendureApiMethods {
  getProduct(params: ProductParams, customQuery?: CustomQuery): Promise<ApolloQueryResult<Product>>;
  getFacet(params: SearchParams, customQuery?: CustomQuery): Promise<ApolloQueryResult<SearchResponse>>;
  getCategory(params: CollectionParams, customQuery?: CustomQuery): Promise<ApolloQueryResult<CollectionList>>;
}
