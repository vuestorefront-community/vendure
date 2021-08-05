import { ApolloQueryResult } from "apollo-client";
import { ExecutionResult } from "graphql";
import { FetchResult } from "@apollo/client";
import { CustomQuery } from "@vue-storefront/core";
import { GetProductsQuery } from "./generated";

import getProducts from "../api/getProducts";
import getCategory from "../api/getCategory";

export interface VendureApiMethods {
  // getProducts(input: any): Promise<FetchResult<GetProductsQuery>>;
  getProduct: any;
  getProducts: typeof getProducts;
  getCategory: typeof getCategory;
}

let foo = () => "hello";
type T1 = typeof foo;
