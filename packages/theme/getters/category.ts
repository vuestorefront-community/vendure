import { AgnosticCategoryTree, CategoryGetters } from '@vue-storefront/core';
import type { Collection, CollectionList } from '@vue-storefront/vendure-api';
import { AgnosticCategoryNavigation } from '@vue-storefront/vendure';
import { getAgnosticNavigation } from '~/mappers/category';

interface ExtendedCategoryGetters extends CategoryGetters<Collection> {
  getNavigation: (collectionList: CollectionList) => AgnosticCategoryNavigation[];
  getTotalItems: (collectionList: CollectionList) => number;
}

const getNavigation = (collectionList: CollectionList): AgnosticCategoryNavigation[] => {
  const categoryNavigation = getAgnosticNavigation(collectionList);

  return categoryNavigation;
};

const getTotalItems = (collectionList: CollectionList): number => {
  return collectionList?.totalItems ? collectionList?.totalItems : 0;
};

// Not used in favor of facetGetters.getTree
const getTree = (category: Collection): AgnosticCategoryTree => {
  if (!category || !category.id) return null;

  return {
    label: '',
    slug: '',
    id: '',
    isCurrent: false,
    items: []
  };
};

export const categoryGetters: ExtendedCategoryGetters = {
  getTree,
  getNavigation,
  getTotalItems
};
