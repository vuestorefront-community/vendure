# HTTPS

Vue Storefront and Vendure can be configured easily to work with HTTPS. You can check how to do that below.

As both tools are based on Node.js, the deployment with HTTPS is straightforward but you may run into an issue with images not being properly served (referenced as HTTPS but served as HTTP). To solve this issue, make sure to add the following line to the `vendure.config.ts` file:

```ts
// vendure.config.ts

  plugins: [
      AssetServerPlugin.init({
          route: 'assets',
          assetUploadDir: path.join(__dirname, '../static/assets'),
          assetUrlPrefix: 'https://api-store.abc.com/assets/',
      }),
```
