module.exports = {
  integrations: {
    vendure: {
      location: "@vue-storefront/vendure-api/server",
      configuration: {
        api: "http://localhost:3456/shop-api"
      }
    }
  }
};
