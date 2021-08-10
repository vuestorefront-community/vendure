import { productGetters } from './../../src/getters/productGetters';
import * as utils from './../../src/getters/_utils';

jest.spyOn(utils, 'createPrice').mockImplementation((price) => price);

const product = {
  _id: '1',
  _description: 'cool laptop',
  _categoriesRef: ['1', '2', '3'],
  name: 'Laptop',
  sku: '123',
  slug: 'laptop',
  images: ['imageV11/url.jpg'],
  price: {
    original: 2,
    current: 1
  },
  collections: [
    {
      id: '1',
      name: 'laptop'
    },
    {
      id: '2',
      name: 'mouse'
    },
    {
      id: '3',
      name: 'keyboard'
    }
  ],
  optionGroups: [
    {
      id: '1',
      name: 'Screen Size',
      code: 'screen-size',
      options: [{
        id: '1',
        name: '13 inch',
        code: '13-inch'
      }]
    }
  ],
  featuredAsset: {
    preview: 'imageV11/url.jpg'
  },
  assets: ['1', '2', '3']
} as any;

describe('[vendure-getters] product getters', () => {
  it('returns default values', () => {
    expect(productGetters.getName(null)).toBe('');
    expect(productGetters.getSlug(null)).toBe('');
    expect(productGetters.getGallery(null)).toEqual([]);
    expect(productGetters.getFiltered(null)).toEqual([]);
  });

  it('returns name', () => {
    expect(productGetters.getName(product)).toBe('Laptop');
  });

  it('returns slug', () => {
    expect(productGetters.getSlug(product)).toBe('laptop');
  });

  it('returns price', () => {
    expect(productGetters.getPrice(product)).toEqual({ regular: 2, special: 1 });
  });

  it('returns gallery', () => {
    expect(productGetters.getGallery(product)).toEqual([
      {
        small: 'imageV11/url.jpg',
        big: 'imageV11/url.jpg',
        normal: 'imageV11/url.jpg'
      }
    ]);
  });

  it('returns cover image', () => {
    expect(productGetters.getCoverImage({ images: [] } as any)).toEqual('');
    expect(productGetters.getCoverImage(product)).toEqual('imageV11/url.jpg');
  });

  it('returns master variant', () => {
    const productCopy = {
      _id: '2',
      _description: 'cool laptop',
      _categoriesRef: ['1', '2', '3'],
      name: 'Laptop',
      sku: '123',
      slug: 'laptop',
      images: ['imageV11/url.jpg'],
      price: {
        original: 2,
        current: 1
      },
      collections: [
        {
          id: '1',
          name: 'laptop'
        },
        {
          id: '2',
          name: 'mouse'
        },
        {
          id: '3',
          name: 'keyboard'
        }
      ],
      optionGroups: [
        {
          id: '1',
          name: 'Screen Size',
          code: 'screen-size',
          options: [{
            id: '1',
            name: '13 inch',
            code: '13-inch'
          }]
        }
      ],
      featuredAsset: {
        preview: 'imageV11/url.jpg'
      },
      assets: ['1', '2', '3']
    } as any;
    const variants = [product, productCopy];
    expect(productGetters.getFiltered(variants as any, { master: true })).toEqual([{_categoriesRef: ['1', '2', '3'], _description: 'cool laptop', _id: '1', images: ['imageV11/url.jpg'], name: 'Laptop', price: {current: 1, original: 2}, sku: '123', slug: 'laptop'}]);
  });

  it('returns all variants', () => {
    const variants = [product];
    expect(productGetters.getFiltered(variants as any)).toEqual([{_categoriesRef: ['1', '2', '3'], _description: 'cool laptop', _id: '1', images: ['imageV11/url.jpg'], name: 'Laptop', price: {current: 1, original: 2}, sku: '123', slug: 'laptop'}]);
  });

  it('returns product attributes', () => {
    expect(productGetters.getAttributes([product])).toEqual([
      {
        id: '1',
        name: 'Screen Size',
        code: 'screen-size',
        options: [{
          id: '1',
          label: '13 inch',
          value: '13-inch'
        }]
      }
    ]);
  });

  it('returns product categories', () => {
    expect(productGetters.getCategoryIds(product)).toEqual([
      '1',
      '2',
      '3'
    ]);
  });

  it('returns product ID', () => {
    expect(productGetters.getId(product)).toEqual('1');
  });
});
