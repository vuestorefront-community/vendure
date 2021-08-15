import { AgnosticCategoryTree, CategoryGetters } from '@vue-storefront/core';
import type { Collection, CollectionList } from '@vue-storefront/vendure-api';
import { ROOT_COLLECTION } from '../helpers';
import { AgnosticCategoryNavigation } from '../types';

interface ExtendedCategoryGetters extends CategoryGetters<Collection> {
  getNavigation: (collectionList: CollectionList) => AgnosticCategoryNavigation[];
  getTotalItems: (collectionList: CollectionList) => number;
}

const getNavigation = (collectionList: CollectionList): AgnosticCategoryNavigation[] => {
  // `(category as Collection)` -> When filtering items each item has a type of Node but should have Collection. Probably a bug in Vendure types
  const rootCategories = collectionList?.items?.filter((category) => (category as Collection)?.parent?.name === ROOT_COLLECTION);
  const categoryNavigation = rootCategories.map(category => ({
    name: (category as Collection)?.name,
    link: (category as Collection)?.slug
  }));

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
