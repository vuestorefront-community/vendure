/* eslint-disable */

import { Wishlist } from "@vue-storefront/vendure-api";
import { AgnosticProductVariant } from "../../src/types";

export const mockedLocalStorage = (function () {
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    }
  };
})();

export const mockedWishlist: Wishlist = [{
  _id: '1',
  _description: 'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
  _categoriesRef: ['2', '3'],
  name: 'Laptop 13 inch 8GB',
  sku: 'L2201308',
  slug: 'laptop',
  collections: [
    {
      id: '2',
      name: 'Electronics',
      breadcrumbs: [
        {
          id: '1',
          name: '__root_collection__',
          slug: '__root_collection__'
        },
        {
          id: '2',
          name: 'Electronics',
          slug: 'electronics'
        }
      ]
    },
    {
      id: '3',
      name: 'Computers',
      breadcrumbs: [
        {
          id: '1',
          name: '__root_collection__',
          slug: '__root_collection__'
        },
        {
          id: '2',
          name: 'Electronics',
          slug: 'electronics'
        },
        {
          id: '3',
          name: 'Computers',
          slug: 'computers'
        }
      ]
    }
  ],
  images: ['http://localhost:3000/assets/preview/71/derick-david-409858-unsplash__preview.jpg'],
  price: {
    original: 129900,
    current: 155880
  }
}]