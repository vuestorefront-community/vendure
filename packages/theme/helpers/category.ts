import { AgnosticCategoryTree } from '@vue-storefront/core';

export const getTreeWithoutEmptyCategories = (categoryTree: AgnosticCategoryTree[]): AgnosticCategoryTree[] => categoryTree?.filter(tree => tree.items.length);
