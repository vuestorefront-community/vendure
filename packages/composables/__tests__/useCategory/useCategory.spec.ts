import { useCategory } from './../../src//composables/useCategory';

const categoriesResult = [
  { name: 'cat1',
    id: 'bbb' },
  { name: 'cat2',
    id: 'aaa' },
  { name: 'cat3',
    id: 'fcd' }
];

jest.mock('../../src/factories/', () => ({
  useCategoryFactory: (params) => () => params
}));

const context = {
  $vendure: {
    api: {
      getCategory: jest.fn(() =>
        Promise.resolve({
          data: {
            collections: [
              { name: 'cat1',
                id: 'bbb' },
              { name: 'cat2',
                id: 'aaa' },
              { name: 'cat3',
                id: 'fcd' }
            ],
            totalItems: 10
          }
        }))
    }
  }
};

describe('[vendure-composables] useCategory', () => {
  it('loads categories', async () => {
    const { categorySearch } = useCategory('test-category') as any;

    const response = await categorySearch(context, { options: { take: 3 } });

    expect(response).toEqual(categoriesResult);
    expect(context.$vendure.api.getCategory).toBeCalledWith({ options: { take: 3 } }, undefined);
  });
});
