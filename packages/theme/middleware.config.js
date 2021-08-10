module.exports = {
  integrations: {
    vendure: {
      location: '@vue-storefront/vendure-api/server',
      configuration: {
        api: {
          uri: 'https://demo.vendure.io/shop-api',
          // to be used later with authentication
          tokenMethod: 'cookie'
        },
        currency: 'USD',
        lang: 'en'
      }
    }
  }
};
