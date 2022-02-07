import { ApiClientExtension } from '@vue-storefront/core';
import { tokenExtension } from './token';
import { localiseExtension } from './localiseConfig';

export const extensions: ApiClientExtension[] = [tokenExtension, localiseExtension];
