import { CustomQuery } from "@vue-storefront/core";
import { Context } from "../../types/context";
import { GetProductsQuery } from "../../types/generated";
import productsQuery from "./products.graphql";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getProducts(
  context: Context,
  params,
  customQuery?: CustomQuery
) {
  const getProducts = context.extendQuery(customQuery, {
    getProducts: {
      query: productsQuery,
      variables: {
        ...params,
      },
    },
  });

  return await context.client.query<GetProductsQuery>({
    query: getProducts.query,
    variables: getProducts.variables,
  });
}
