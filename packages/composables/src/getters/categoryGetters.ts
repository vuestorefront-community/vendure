import { CategoryGetters, AgnosticCategoryTree, AgnosticBreadcrumb } from '@vue-storefront/core';
import type { CollectionItem, CategoryNavigation } from '@vue-storefront/vendure-api';
import { ROOT_COLLECTION } from './_utils';

function getTree(category: CollectionItem): AgnosticCategoryTree | null {
  if (!category || !category.id) return null;

  return {
    label: category.name,
    slug: category.slug,
    id: category.id,
    isCurrent: false,
    items: category.children.map(child => getTree(child))
  };
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function getBreadcrumbsFromSlug(searchData, slug: string): AgnosticBreadcrumb[] {
  const categoryFromSlug = searchData?.data?.categories?.find(category => category.collection.slug === slug);

  const breadcrumbsFromSlug = categoryFromSlug?.collection?.breadcrumbs?.map(breadcrumb => ({
    text: breadcrumb?.name === ROOT_COLLECTION ? 'Home' : breadcrumb?.name,
    link: breadcrumb?.slug === ROOT_COLLECTION ? '/' : breadcrumb?.slug
  }));

  return breadcrumbsFromSlug;
}

export const categoryGetters: CategoryGetters<CollectionItem> = {
  getTree,
  getBreadcrumbs,
  getBreadcrumbsFromSlug,
  getNavigation
};
