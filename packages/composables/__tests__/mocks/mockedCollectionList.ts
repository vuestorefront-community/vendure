import { CollectionList } from '@vue-storefront/vendure-api';

export const mockedCollectionList: CollectionList = {
  totalItems: 9,
  items: [
    {
      id: '2',
      name: 'Electronics',
      slug: 'electronics',
      breadcrumbs: [
        {
          name: '__root_collection__',
          slug: '__root_collection__',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Electronics',
          slug: 'electronics',
          __typename: 'CollectionBreadcrumb'
        }
      ],
      __typename: 'Collection',
      parent: {
        id: '1',
        name: '__root_collection__',
        slug: '__root_collection__',
        breadcrumbs: [
          {
            name: '__root_collection__',
            slug: '__root_collection__',
            __typename: 'CollectionBreadcrumb'
          }
        ],
        __typename: 'Collection'
      },
      children: [
        {
          id: '3',
          name: 'Computers',
          slug: 'computers',
          breadcrumbs: [
            {
              name: '__root_collection__',
              slug: '__root_collection__',
              __typename: 'CollectionBreadcrumb'
            },
            {
              name: 'Electronics',
              slug: 'electronics',
              __typename: 'CollectionBreadcrumb'
            },
            {
              name: 'Computers',
              slug: 'computers',
              __typename: 'CollectionBreadcrumb'
            }
          ],
          __typename: 'Collection',
          children: []
        },
        {
          id: '4',
          name: 'Camera & Photo',
          slug: 'camera-photo',
          breadcrumbs: [
            {
              name: '__root_collection__',
              slug: '__root_collection__',
              __typename: 'CollectionBreadcrumb'
            },
            {
              name: 'Electronics',
              slug: 'electronics',
              __typename: 'CollectionBreadcrumb'
            },
            {
              name: 'Camera & Photo',
              slug: 'camera-photo',
              __typename: 'CollectionBreadcrumb'
            }
          ],
          __typename: 'Collection',
          children: []
        }
      ]
    },
    {
      id: '3',
      name: 'Computers',
      slug: 'computers',
      breadcrumbs: [
        {
          name: '__root_collection__',
          slug: '__root_collection__',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Electronics',
          slug: 'electronics',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Computers',
          slug: 'computers',
          __typename: 'CollectionBreadcrumb'
        }
      ],
      __typename: 'Collection',
      parent: {
        id: '2',
        name: 'Electronics',
        slug: 'electronics',
        breadcrumbs: [
          {
            name: '__root_collection__',
            slug: '__root_collection__',
            __typename: 'CollectionBreadcrumb'
          },
          {
            name: 'Electronics',
            slug: 'electronics',
            __typename: 'CollectionBreadcrumb'
          }
        ],
        __typename: 'Collection'
      },
      children: []
    },
    {
      id: '6',
      name: 'Furniture',
      slug: 'furniture',
      breadcrumbs: [
        {
          name: '__root_collection__',
          slug: '__root_collection__',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Home & Garden',
          slug: 'home-garden',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Furniture',
          slug: 'furniture',
          __typename: 'CollectionBreadcrumb'
        }
      ],
      __typename: 'Collection',
      parent: {
        id: '5',
        name: 'Home & Garden',
        slug: 'home-garden',
        breadcrumbs: [
          {
            name: '__root_collection__',
            slug: '__root_collection__',
            __typename: 'CollectionBreadcrumb'
          },
          {
            name: 'Home & Garden',
            slug: 'home-garden',
            __typename: 'CollectionBreadcrumb'
          }
        ],
        __typename: 'Collection'
      },
      children: []
    },
    {
      id: '9',
      name: 'Equipment',
      slug: 'equipment',
      breadcrumbs: [
        {
          name: '__root_collection__',
          slug: '__root_collection__',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Sports & Outdoor',
          slug: 'sports-outdoor',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Equipment',
          slug: 'equipment',
          __typename: 'CollectionBreadcrumb'
        }
      ],
      __typename: 'Collection',
      parent: {
        id: '8',
        name: 'Sports & Outdoor',
        slug: 'sports-outdoor',
        breadcrumbs: [
          {
            name: '__root_collection__',
            slug: '__root_collection__',
            __typename: 'CollectionBreadcrumb'
          },
          {
            name: 'Sports & Outdoor',
            slug: 'sports-outdoor',
            __typename: 'CollectionBreadcrumb'
          }
        ],
        __typename: 'Collection'
      },
      children: []
    },
    {
      id: '4',
      name: 'Camera & Photo',
      slug: 'camera-photo',
      breadcrumbs: [
        {
          name: '__root_collection__',
          slug: '__root_collection__',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Electronics',
          slug: 'electronics',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Camera & Photo',
          slug: 'camera-photo',
          __typename: 'CollectionBreadcrumb'
        }
      ],
      __typename: 'Collection',
      parent: {
        id: '2',
        name: 'Electronics',
        slug: 'electronics',
        breadcrumbs: [
          {
            name: '__root_collection__',
            slug: '__root_collection__',
            __typename: 'CollectionBreadcrumb'
          },
          {
            name: 'Electronics',
            slug: 'electronics',
            __typename: 'CollectionBreadcrumb'
          }
        ],
        __typename: 'Collection'
      },
      children: []
    },
    {
      id: '5',
      name: 'Home & Garden',
      slug: 'home-garden',
      breadcrumbs: [
        {
          name: '__root_collection__',
          slug: '__root_collection__',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Home & Garden',
          slug: 'home-garden',
          __typename: 'CollectionBreadcrumb'
        }
      ],
      __typename: 'Collection',
      parent: {
        id: '1',
        name: '__root_collection__',
        slug: '__root_collection__',
        breadcrumbs: [
          {
            name: '__root_collection__',
            slug: '__root_collection__',
            __typename: 'CollectionBreadcrumb'
          }
        ],
        __typename: 'Collection'
      },
      children: [
        {
          id: '6',
          name: 'Furniture',
          slug: 'furniture',
          breadcrumbs: [
            {
              name: '__root_collection__',
              slug: '__root_collection__',
              __typename: 'CollectionBreadcrumb'
            },
            {
              name: 'Home & Garden',
              slug: 'home-garden',
              __typename: 'CollectionBreadcrumb'
            },
            {
              name: 'Furniture',
              slug: 'furniture',
              __typename: 'CollectionBreadcrumb'
            }
          ],
          __typename: 'Collection',
          children: []
        },
        {
          id: '7',
          name: 'Plants',
          slug: 'plants',
          breadcrumbs: [
            {
              name: '__root_collection__',
              slug: '__root_collection__',
              __typename: 'CollectionBreadcrumb'
            },
            {
              name: 'Home & Garden',
              slug: 'home-garden',
              __typename: 'CollectionBreadcrumb'
            },
            {
              name: 'Plants',
              slug: 'plants',
              __typename: 'CollectionBreadcrumb'
            }
          ],
          __typename: 'Collection',
          children: []
        }
      ]
    },
    {
      id: '7',
      name: 'Plants',
      slug: 'plants',
      breadcrumbs: [
        {
          name: '__root_collection__',
          slug: '__root_collection__',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Home & Garden',
          slug: 'home-garden',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Plants',
          slug: 'plants',
          __typename: 'CollectionBreadcrumb'
        }
      ],
      __typename: 'Collection',
      parent: {
        id: '5',
        name: 'Home & Garden',
        slug: 'home-garden',
        breadcrumbs: [
          {
            name: '__root_collection__',
            slug: '__root_collection__',
            __typename: 'CollectionBreadcrumb'
          },
          {
            name: 'Home & Garden',
            slug: 'home-garden',
            __typename: 'CollectionBreadcrumb'
          }
        ],
        __typename: 'Collection'
      },
      children: []
    },
    {
      id: '10',
      name: 'Footwear',
      slug: 'footwear',
      breadcrumbs: [
        {
          name: '__root_collection__',
          slug: '__root_collection__',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Sports & Outdoor',
          slug: 'sports-outdoor',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Footwear',
          slug: 'footwear',
          __typename: 'CollectionBreadcrumb'
        }
      ],
      __typename: 'Collection',
      parent: {
        id: '8',
        name: 'Sports & Outdoor',
        slug: 'sports-outdoor',
        breadcrumbs: [
          {
            name: '__root_collection__',
            slug: '__root_collection__',
            __typename: 'CollectionBreadcrumb'
          },
          {
            name: 'Sports & Outdoor',
            slug: 'sports-outdoor',
            __typename: 'CollectionBreadcrumb'
          }
        ],
        __typename: 'Collection'
      },
      children: []
    },
    {
      id: '8',
      name: 'Sports & Outdoor',
      slug: 'sports-outdoor',
      breadcrumbs: [
        {
          name: '__root_collection__',
          slug: '__root_collection__',
          __typename: 'CollectionBreadcrumb'
        },
        {
          name: 'Sports & Outdoor',
          slug: 'sports-outdoor',
          __typename: 'CollectionBreadcrumb'
        }
      ],
      __typename: 'Collection',
      parent: {
        id: '1',
        name: '__root_collection__',
        slug: '__root_collection__',
        breadcrumbs: [
          {
            name: '__root_collection__',
            slug: '__root_collection__',
            __typename: 'CollectionBreadcrumb'
          }
        ],
        __typename: 'Collection'
      },
      children: [
        {
          id: '9',
          name: 'Equipment',
          slug: 'equipment',
          breadcrumbs: [
            {
              name: '__root_collection__',
              slug: '__root_collection__',
              __typename: 'CollectionBreadcrumb'
            },
            {
              name: 'Sports & Outdoor',
              slug: 'sports-outdoor',
              __typename: 'CollectionBreadcrumb'
            },
            {
              name: 'Equipment',
              slug: 'equipment',
              __typename: 'CollectionBreadcrumb'
            }
          ],
          __typename: 'Collection',
          children: []
        },
        {
          id: '10',
          name: 'Footwear',
          slug: 'footwear',
          breadcrumbs: [
            {
              name: '__root_collection__',
              slug: '__root_collection__',
              __typename: 'CollectionBreadcrumb'
            },
            {
              name: 'Sports & Outdoor',
              slug: 'sports-outdoor',
              __typename: 'CollectionBreadcrumb'
            },
            {
              name: 'Footwear',
              slug: 'footwear',
              __typename: 'CollectionBreadcrumb'
            }
          ],
          __typename: 'Collection',
          children: []
        }
      ]
    }
  ],
  __typename: 'CollectionList'
} as any;
