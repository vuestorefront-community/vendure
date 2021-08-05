import { ApiClientMethods, IntegrationContext } from "@vue-storefront/core";
import { ClientInstance, Config } from "./setup";
import { VendureApiMethods } from "./API";

export type Context = IntegrationContext<
  ClientInstance,
  Config,
  ApiClientMethods<VendureApiMethods>
>;
