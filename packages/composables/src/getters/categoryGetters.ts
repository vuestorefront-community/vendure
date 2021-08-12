import { AgnosticCategoryTree, CategoryGetters } from '@vue-storefront/core';
import type { CategoryNavigation, Collection, CollectionList } from '@vue-storefront/vendure-api';
import { ROOT_COLLECTION } from './_utils';


interface ExtendedCategoryGetters extends CategoryGetters<Collection> {
  getNavigation: (categories: Collection[]) => CategoryNavigation[];
  getTotalCategoryItems: (collectionList: CollectionList) => number;
}

const getNavigation = (categories: Collection[]): CategoryNavigation[] => {
  const rootCategories = categories?.filter(category => category?.parent?.name === ROOT_COLLECTION);
  const categoryNavigation = rootCategories.map(category => ({
    name: category?.name,
    link: category?.slug
  }));

  return categoryNavigation;
}

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

const getTotalCategoryItems = (collectionList: CollectionList): number => {
  return collectionList?.totalItems ? collectionList?.totalItems : 0
};

export const categoryGetters: ExtendedCategoryGetters = {
  getTree,
  getNavigation,
  getTotalCategoryItems
};
