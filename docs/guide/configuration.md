# Configuration

Instructions on how to start Vendure integration in development mode.

## Requirements

- NodeJS v14 or later
- Vendure server running in localhost for GraphQL API or <https://demo.vendure.io/shop-api>
- Set up auth options in Vendure server

```ts
// vendure-config.ts
...
  authOptions: {
    tokenMethod: 'bearer', // authorization header method
    requireVerification: false, // disable register by email verification
  },
```

## Setting up Vendure Server

<https://www.vendure.io/docs/getting-started/>

## Steps

1. Fork the repo
2. Clone your fork of the repo

    ```bash
    git clone https://github.com/vuestorefront/vendure.git
    cd vendure
    ```

3. Run `yarn` to install dependencies
4. Add your Vendure server GraphQL API uri to env file in `packages/api-client` and `packages/theme`

    ```bash
    cd packages/theme
    cp .env.example .env
    ```

    ```js
    // packages/theme/.env.example

    GRAPHQL_API=http://localhost:3000/shop-api
    TOKEN_METHOD=bearer
    CURRENCY=USD
    LANG=en
    ```

    These environment variables will be then used in:

    ```js
    // packages/theme/middleware.config.js

    module.exports = {
      integrations: {
        vendure: {
          location: '@vue-storefront/vendure-api/server',
          configuration: {
            api: {
              uri: process.env.GRAPHQL_API,
              tokenMethod: process.env.TOKEN_METHOD
            },
            currency: process.env.CURRENCY,
            lang: process.env.LANG
          }
        }
      }
    };
    ```

5. Build dependencies `yarn build`
6. Run `yarn dev` to run theme. You can find other commands in `package.json`

Your project will be running on `http://localhost:3001` (As Vendure server is running on port `3000`)
