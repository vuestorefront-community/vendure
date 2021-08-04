module.exports = {
  integrations: {
    vendure: {
      location: '@vue-storefront/vendure-api/server',
      configuration: {
        api: {
          // for demo replace with https://demo.vendure.io/shop-api
          uri: 'http://localhost:3000/shop-api',
          // to be used later with authentication
          tokenMethod: 'cookie'
        },
        currency: 'USD',
        lang: 'en'
      }
    }
  }
};
