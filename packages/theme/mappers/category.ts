import { Collection, CollectionList } from '@vue-storefront/vendure-api';
import { AgnosticCategoryNavigation } from '@vue-storefront/vendure';
import { ROOT_COLLECTION } from '../helpers';

export const getAgnosticNavigation = (collectionList: CollectionList): AgnosticCategoryNavigation[] => {
  // `(category as Collection)` -> When filtering items each item has a type of Node but should have Collection. Probably a bug in Vendure types
  const rootCategories = collectionList?.items?.filter((category) => (category as Collection)?.parent?.name === ROOT_COLLECTION);
  const agnosticNavigation = rootCategories.map(category => ({
    name: (category as Collection)?.name,
    link: (category as Collection)?.slug
  }));

  return agnosticNavigation;
};
