module.exports = {
  //   schema: ["./schema.graphql"],
  //   documents: "packages/api-client/**/*.graphql",
  extensions: {
    endpoints: {
      default: {
        url: "http://localhost:3456/shop-api",
      },
    },
  },
};
