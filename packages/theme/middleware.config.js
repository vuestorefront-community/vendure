module.exports = {
  integrations: {
    vendure: {
      location: '@vue-storefront/vendure-api/server',
      configuration: {
        api: {
          uri: process.env.GRAPHQL_API,
          // to be used later with authentication
          tokenMethod: 'cookie'
        },
        currency: 'USD',
        lang: 'en'
      }
    }
  }
};
