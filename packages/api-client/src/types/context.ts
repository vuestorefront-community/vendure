import { ApiClientMethods, IntegrationContext } from '@vue-storefront/core';
import { VendureApiMethods } from './API';
import { ClientInstance, Config } from './setup';

export type Context = IntegrationContext<ClientInstance, Config, ApiClientMethods<VendureApiMethods>>;
