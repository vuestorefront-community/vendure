import { ApiClientExtension } from '@vue-storefront/core';
import { tokenExtension } from './token';

export const extensions: ApiClientExtension[] = [tokenExtension];
