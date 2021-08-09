import { CategoryGetters, AgnosticCategoryTree, AgnosticBreadcrumb } from '@vue-storefront/core';
import type { CollectionItem, CategoryNavigation } from '@vue-storefront/vendure-api';

const ROOT_COLLECTION = '__root_collection__';

function getTree(category: CollectionItem): AgnosticCategoryTree {
  if (!category) return null;

  const getRoot = (category) => (category?.parent?.name === ROOT_COLLECTION ? category : getRoot(category?.children));
  const buildTree = (rootCategory) => ({
    label: rootCategory.name,
    slug: rootCategory.slug,
    id: rootCategory.id,
    isCurrent: rootCategory.id === category.id,
    items: rootCategory.children
  });

  return buildTree(getRoot(category));
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function getBreadcrumbs(category): AgnosticBreadcrumb[] {
  const agnosticBreadcrums = category?.breadcrumbs?.map(breadcrumb => ({
    text: breadcrumb?.name,
    // TODO: adjust root category logic. For now it will return { link: "/c/__root_collection__", text: "__root_collection__" }. It should return correct root category.
    link: `/c/${breadcrumb?.slug}`
  }));
  return agnosticBreadcrums;
}

function getNavigation(categories: CollectionItem[]): CategoryNavigation[] {
  const rootCategories = categories?.filter(category => category?.parent?.name === ROOT_COLLECTION);
  const categoryNavigation = rootCategories.map(category => ({
    name: category?.name,
    link: category?.slug
  }));

  return categoryNavigation;
}

export const categoryGetters: CategoryGetters<CollectionItem> = {
  getTree,
  getBreadcrumbs,
  getNavigation
};
