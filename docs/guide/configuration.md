# Configuration

Instructions on how to start Vendure integration in development mode.

## Requirements

- NodeJS v14 or later
- Vendure server running in localhost for GraphQL API or <https://demo.vendure.io/shop-api>

## Steps

1. Fork the repo
2. Clone your fork of the repo

    ```
    example:
    git clone https://github.com/vuestorefront/vendure.git
    cd vendure
    ```

2. Run `yarn` to install dependencies
3. Add your Vendure server GraphQL API uri to env file in `packages/api-client` and `packages/theme`

    ```bash
    cd packages/api-client
    cp .env.example .env

    cd packages/theme
    cp .env.example .env
    ```

    These environment variables will be used in `packages/theme/middleware.config.js`

    ```js
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

4. Build dependencies `yarn build`
5. Run `yarn dev` to run theme. You can find other commands in `package.json`
