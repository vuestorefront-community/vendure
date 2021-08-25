import { mockedCollectionList } from '../__mocks__';
import { categoryGetters } from './../../src/getters/categoryGetters';

describe('[vendure-getters] category helpers', () => {
  it('returns navigation based on current categories', () => {
    const navigation = categoryGetters.getNavigation(mockedCollectionList);
    expect(navigation).toStrictEqual([
      { name: 'Electronics', link: 'electronics'},
      { name: 'Home & Garden', link: 'home-garden'},
      { name: 'Sports & Outdoor', link: 'sports-outdoor'}
    ]);
  });

  it('returns total number of category items', () => {
    const totalCategoryItems = categoryGetters.getTotalItems(mockedCollectionList);
    expect(totalCategoryItems).toBe(9);
  });
});
