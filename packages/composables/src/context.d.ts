import { ApiClientMethods, IntegrationContext } from '@vue-storefront/core';
import {
  ClientInstance,
  Config,
  VendureApiMethods
} from '@vue-storefront/vendure-api';

declare module '@vue-storefront/core' {
  export interface Context {
    $vendure: IntegrationContext<
      ClientInstance,
      Config,
      ApiClientMethods<VendureApiMethods>
    >;
  }
}
