import { facetGetters } from './../../src/getters/facetGetters';

describe('[vendure-getters] facet getters', () => {
  it('returns sorting options', () => {
    expect(facetGetters.getSortOptions({ input: { input: { sort: null } } } as any)).toEqual({
      options: [
        { type: 'sort', id: 'latest', selected: false, value: 'Latest', count: null },
        {
          type: 'sort',
          id: 'ASC',
          selected: false,
          value: 'Price from low to high',
          count: null
        },
        {
          type: 'sort',
          id: 'DESC',
          selected: false,
          value: 'Price from high to low',
          count: null
        }
      ],
      selected: 'latest'
    });
  });

  it('returns grouped facets', () => {
    const searchData = {
      input: {},
      data: {
        facets: [
          { facetValue: { name: '1', code: '123' }, count: 1 }
        ]
      }
    } as any;

    const facets = facetGetters.getGrouped(searchData);

    expect(facets).toEqual([{
      id: '1',
      label: 'Attributes',
      count: null,
      options: [{
        type: 'attribute',
        id: '1',
        attrName: '1',
        value: '123',
        selected: false,
        count: 1
      }]
    }]);
  });

  it('returns pagination info', () => {
    expect(facetGetters.getPagination({ data: null } as any)).toEqual({
      currentPage: 1,
      itemsPerPage: 1,
      pageOptions: [1],
      totalItems: 1,
      totalPages: 1
    });

    const searchData = {
      input: {
        input: {
          take: 10,
          page: 2
        }
      },
      data: {
        total: 120,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 50]
      }
    } as any;

    const paginationInfo = facetGetters.getPagination(searchData);

    expect(paginationInfo).toEqual({
      currentPage: 1,
      itemsPerPage: 10,
      pageOptions: [10, 20, 50],
      totalItems: 120,
      totalPages: 12
    });
  });
});
