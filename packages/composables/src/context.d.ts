import { IntegrationContext } from '@vue-storefront/core';

declare module '@vue-storefront/core' {
  export interface Context {
    $vendure: IntegrationContext<any, any, any>;
  }
}
