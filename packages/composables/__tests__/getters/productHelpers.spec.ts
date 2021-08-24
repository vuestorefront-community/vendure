import { mockedAllProductVariants, mockedOptions, mockedProduct, mockedProductVariant } from '../__mocks__';
import { productGetters } from './../../src/getters/productGetters';
import * as utils from './../../src/helpers/_utils';

jest.spyOn(utils, 'createPrice').mockImplementation((price) => price);

describe('[vendure-getters] product getters', () => {
  it('returns default values', () => {
    expect(productGetters.getName(null)).toBe('');
    expect(productGetters.getSlug(null)).toBe('');
    expect(productGetters.getGallery(null)).toEqual([]);
    expect(productGetters.getFiltered(null)).toEqual([]);
  });

  it('returns name', () => {
    expect(productGetters.getName(mockedProductVariant)).toBe('Laptop 13 inch 8GB');
  });

  it('returns slug', () => {
    expect(productGetters.getSlug(mockedProductVariant)).toBe('laptop');
  });

  it('returns price', () => {
    expect(productGetters.getPrice(mockedProductVariant)).toEqual({ regular: 155880, special: 129900 });
  });

  it('returns gallery', () => {
    expect(productGetters.getGallery(mockedProductVariant)).toEqual([
      {
        small: 'http://localhost:3000/assets/preview/71/derick-david-409858-unsplash__preview.jpg',
        big: 'http://localhost:3000/assets/preview/71/derick-david-409858-unsplash__preview.jpg',
        normal: 'http://localhost:3000/assets/preview/71/derick-david-409858-unsplash__preview.jpg'
      }
    ]);
  });

  it('returns cover image', () => {
    expect(productGetters.getCoverImage({ images: [] } as any)).toEqual('');
    expect(productGetters.getCoverImage(mockedProductVariant)).toEqual('http://localhost:3000/assets/preview/71/derick-david-409858-unsplash__preview.jpg');
  });

  it('returns master variant', () => {
    expect(productGetters.getByFilters(mockedProduct, { master: true })).toEqual(mockedProductVariant);
  });

  it('returns all variants', () => {
    expect(productGetters.getByFilters(mockedProduct)).toEqual(mockedAllProductVariants);
  });

  it('returns product options', () => {
    expect(productGetters.getOptions(mockedProduct)).toEqual(mockedOptions);
  });

  it('returns product categories', () => {
    expect(productGetters.getCategoryIds(mockedProductVariant)).toEqual(['2', '3']);
  });

  it('returns product ID', () => {
    expect(productGetters.getId(mockedProductVariant)).toEqual('1');
  });

  it('returns a product description', () => {
    expect(productGetters.getDescription(mockedProductVariant)).toEqual('Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.');
  });
});
