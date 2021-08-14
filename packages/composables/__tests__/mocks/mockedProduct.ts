import { Product } from '@vue-storefront/vendure-api';
import { AgnosticProductOptions, AgnosticProductVariant } from '../../src/types';

export const mockedProduct: Product = {
  slug: 'laptop',
  description:
    'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
  variants: [
    {
      id: '1',
      sku: 'L2201308',
      name: 'Laptop 13 inch 8GB',
      price: 129900,
      priceWithTax: 155880,
      currencyCode: 'USD',
      __typename: 'ProductVariant'
    },
    {
      id: '2',
      sku: 'L2201508',
      name: 'Laptop 15 inch 8GB',
      price: 139900,
      priceWithTax: 167880,
      currencyCode: 'USD',
      __typename: 'ProductVariant'
    },
    {
      id: '3',
      sku: 'L2201316',
      name: 'Laptop 13 inch 16GB',
      price: 219900,
      priceWithTax: 263880,
      currencyCode: 'USD',
      __typename: 'ProductVariant'
    },
    {
      id: '4',
      sku: 'L2201516',
      name: 'Laptop 15 inch 16GB',
      price: 229900,
      priceWithTax: 275880,
      currencyCode: 'USD',
      __typename: 'ProductVariant'
    }
  ],
  featuredAsset: {
    preview:
      'http://localhost:3000/assets/preview/71/derick-david-409858-unsplash__preview.jpg',
    __typename: 'Asset'
  },
  assets: [
    {
      preview:
        'http://localhost:3000/assets/preview/71/derick-david-409858-unsplash__preview.jpg',
      __typename: 'Asset'
    }
  ],
  collections: [
    {
      id: '2',
      name: 'Electronics',
      __typename: 'Collection'
    },
    {
      id: '3',
      name: 'Computers',
      __typename: 'Collection'
    }
  ],
  optionGroups: [
    {
      id: '1',
      name: 'screen size',
      code: 'laptop-screen-size',
      options: [
        {
          id: '1',
          name: '13 inch',
          code: '13-inch',
          __typename: 'ProductOption'
        },
        {
          id: '2',
          name: '15 inch',
          code: '15-inch',
          __typename: 'ProductOption'
        }
      ],
      __typename: 'ProductOptionGroup'
    },
    {
      id: '2',
      name: 'RAM',
      code: 'laptop-ram',
      options: [
        {
          id: '4',
          name: '16GB',
          code: '16gb',
          __typename: 'ProductOption'
        },
        {
          id: '3',
          name: '8GB',
          code: '8gb',
          __typename: 'ProductOption'
        }
      ],
      __typename: 'ProductOptionGroup'
    }
  ],
  __typename: 'Product'
} as any;

export const mockedProductVariant: AgnosticProductVariant = {
  _id: '1',
  _description: 'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
  _categoriesRef: ['2', '3'],
  name: 'Laptop 13 inch 8GB',
  sku: 'L2201308',
  slug: 'laptop',
  images: ['http://localhost:3000/assets/preview/71/derick-david-409858-unsplash__preview.jpg'],
  price: {
    original: 129900,
    current: 155880
  }
};

export const mockedAllProductVariants: AgnosticProductVariant[] = [
  {
    _id: '1',
    _description: 'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
    _categoriesRef: ['2', '3'],
    name: 'Laptop 13 inch 8GB',
    sku: 'L2201308',
    slug: 'laptop',
    images: ['http://localhost:3000/assets/preview/71/derick-david-409858-unsplash__preview.jpg'],
    price: {
      original: 129900,
      current: 155880
    }
  },
  {
    _id: '2',
    _description: 'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
    _categoriesRef: ['2', '3'],
    name: 'Laptop 15 inch 8GB',
    sku: 'L2201508',
    slug: 'laptop',
    images: ['http://localhost:3000/assets/preview/71/derick-david-409858-unsplash__preview.jpg'],
    price: {
      original: 139900,
      current: 167880
    }
  },
  {
    _id: '3',
    _description: 'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
    _categoriesRef: ['2', '3'],
    name: 'Laptop 13 inch 16GB',
    sku: 'L2201316',
    slug: 'laptop',
    images: ['http://localhost:3000/assets/preview/71/derick-david-409858-unsplash__preview.jpg'],
    price: {
      original: 219900,
      current: 263880
    }
  },
  {
    _id: '4',
    _description: 'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
    _categoriesRef: ['2', '3'],
    name: 'Laptop 15 inch 16GB',
    sku: 'L2201516',
    slug: 'laptop',
    images: ['http://localhost:3000/assets/preview/71/derick-david-409858-unsplash__preview.jpg'],
    price: {
      original: 229900,
      current: 275880
    }
  }
];

export const mockedOptions: AgnosticProductOptions[] = [
  {
    id: '1',
    label: 'screen size',
    value: 'laptop-screen-size',
    options: [
      {
        id: '1',
        label: '13 inch',
        value: '13-inch'
      },
      {
        id: '2',
        label: '15 inch',
        value: '15-inch'
      }
    ]
  },
  {
    id: '2',
    label: 'RAM',
    value: 'laptop-ram',
    options: [
      {
        id: '4',
        label: '16GB',
        value: '16gb'
      },
      {
        id: '3',
        label: '8GB',
        value: '8gb'
      }
    ]
  }
];
