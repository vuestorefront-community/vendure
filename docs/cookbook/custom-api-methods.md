# Custom API Methods

In some cases, you may want to create a custom API method that is not part of Vue Storefront and you are free to do so! Below, you can see how to write a new API method that you can then access in your Vue components.

First of all, you would need to register a new `extension` in a `middleware.config.js` file:

```ts
module.exports = {
  integrations: {
    vendure: {
      location: '@vue-storefront/vendure-api/server',
      configuration: {
        api: {
          uri: process.env.GRAPHQL_API,
          // to be used later with authentication
          tokenMethod: process.env.TOKEN_METHOD
        }
      },
      extensions: (extensions) => [
        ...extensions,
        {
          name: 'test',
          extendApiMethods: {
            testApiMethod: async ({ client, config }) => {
              const result = await client.query({ query: gql`
              query products {
                products {
                  items {
                    id
                    customFields
                  }
                }
              }
              `, fetchPolicy: 'no-cache' })
              console.log(result)
            }
          }
        }
      ]
    }
  }
};
```

Then, you can use the newly created API method in your component or a page like following:

```ts
const { $vendure } = useVSFContext();

onSSR(async () => {
    await $vendure.api.testApiMethod()
});
```
