# `useFacet`

## Features

`useFacet` composition function can be used to fetch data related to:

* products,
* categories,
* breadcrumbs.
* facets

## API

`useFacet` contains the following properties:

* `search` - function for searching and classifying records, allowing users to browse the catalog data. It accepts a single object as a parameter with following signature:

<https://www.vendure.io/docs/graphql-api/shop/input-types/#searchinput>

* `result` - reactive data object containing the response from the backend.

<https://www.vendure.io/docs/graphql-api/shop/object-types/#searchresponse>

* `loading` - reactive object containing information about the loading state of `search`.

* `error` - reactive object containing the error message, if `search` failed for any reason.

```ts
interface UseFacetErrors {
  search: Error;
}
```

## Getters

* `getGrouped` - returns grouped facets by facet name.

* `getSortOptions` - returns available and currently selected sorting options.

* `getProducts` - returns products matching current filters.

* `getPagination` - returns pagination information.

* `getTree` - returns current category tree.

* `getBreadcrumbsFromSlug` - returns breadcrumbs from current slug.

* `getAgnosticSearchResult` - returns agnostic search result.

* `getCategoryTree` - return the tree of nested categories (not used in favor of `getTree`).

* `getBreadcrumbs` - returns breadcrumbs information (not used in favor of `getBreadcrumbsFromSlug`).

* `getAll` - TBD.

```ts
interface FacetsGetters {
  getAll: (searchData: FacetSearchResult<AgnosticSearchResult>, criteria?: string[]) => AgnosticFacet[];
  getGrouped: (searchData: FacetSearchResult<AgnosticSearchResult>, criteria?: string[]) => AgnosticGroupedFacet[];
  getCategoryTree: (searchData: FacetSearchResult<AgnosticSearchResult>) => AgnosticCategoryTree;
  getSortOptions: (searchData: FacetSearchResult<AgnosticSearchResult>) => AgnosticSort;
  getProducts: (searchData: FacetSearchResult<AgnosticSearchResult>) => ProductVariant[];
  getPagination: (searchData: FacetSearchResult<AgnosticSearchResult>) => AgnosticPagination;
  getBreadcrumbs: (searchData: FacetSearchResult<AgnosticSearchResult>) => AgnosticBreadcrumb[];
  getTree: (category: Collection) => AgnosticCategoryTree | null;
  getBreadcrumbsFromSlug: (searchResult: FacetSearchResult<AgnosticSearchResult>, slug: string) => AgnosticBreadcrumb[]
  getAgnosticSearchResult: (searchResultValue: SearchResultValue<SearchResponse, SearchInput>) => FacetSearchResult<AgnosticSearchResult>;
}

interface AgnosticFacet {
  type: string;
  id: string;
  value: any;
  attrName?: string;
  count?: number;
  selected?: boolean;
  metadata?: any;
}

interface AgnosticGroupedFacet {
  id: string;
  label: string;
  count?: number;
  options: AgnosticFacet[];
}

interface AgnosticCategoryTree {
  label: string;
  slug?: string;
  items: AgnosticCategoryTree[];
  isCurrent: boolean;
  count?: number;
  [x: string]: unknown;
}

interface AgnosticSort {
  options: AgnosticFacet[];
  selected: string;
}


interface FacetSearchResult {
  data;
  input: AgnosticFacetSearchParams;
}

interface AgnosticFacetSearchParams {
  categorySlug?: string;
  rootCatSlug?: string;
  term?: string;
  page?: number;
  itemsPerPage?: number;
  sort?: string;
  filters?: Record<string, string[]>;
  metadata?: any;
  [x: string]: any;
}

interface AgnosticPagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  pageOptions: number[];
}

interface AgnosticBreadcrumb {
  text: string;
  link: string;
}

type AgnosticSearchResult = {
  products: SearchResult[];
  categories: CollectionResult[];
  facets: FacetValueResult[];
  total: number;
  perPageOptions: number[];
  itemsPerPage: number;
}

type SearchResultValue<SEARCH_DATA, SEARCH_INPUT> = {
  data?: SEARCH_DATA;
  input?: SEARCH_INPUT;
}
```

<https://www.vendure.io/docs/graphql-api/shop/object-types/#searchresponse>

## Example

```js
import { useFacet, facetGetters } from '@vsf-enterprise/commercetools';

setup(props, context) {
  const { result, search, loading } = useFacet();

  onSSR(async () => {
    await search({
      collectionSlug: 'clothing',
      sort: { price: 'ASC'},
      take: 10,
      groupByProduct: true, // To return only master variant
    });
  });

    // Will be refactored to data mapper in theme folder
    const searchResult = computed(() => facetGetters.getAgnosticSearchResult(result.value)); // Convert raw result to agnostic search result 

    const sortBy = computed(() => facetGetters.getSortOptions(searchResult.value));
    const facets = computed(() => facetGetters.getGrouped(searchResult.value));
    const products = computed(() => facetGetters.getProducts(searchResult.value));

  return {
    sortBy,
    facets,
    products,
    loading
  }
}
```
