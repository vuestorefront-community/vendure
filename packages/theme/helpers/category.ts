import { AgnosticCategoryTree } from '@vue-storefront/core';

export const getTreeWithoutEmptyCategories = (categoryTree: AgnosticCategoryTree[]): AgnosticCategoryTree[] => categoryTree.value.filter(tree => tree.items.length);
