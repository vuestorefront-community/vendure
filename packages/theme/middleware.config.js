module.exports = {
  integrations: {
    vendure: {
      location: '@vue-storefront/vendure-api/server',
      configuration: {
        api: {
          uri: process.env.GRAPHQL_API,
          // to be used later with authentication
          tokenMethod: process.env.TOKEN_METHOD
        },
        currency: process.env.CURRENCY,
        lang: process.env.LANG
      }
    }
  }
};
