<div align="center">
  <img src="https://user-images.githubusercontent.com/1626923/137092657-fb398d20-b592-4661-a1f9-4135db0b61d5.png" height="100px" />
  <img src="https://www.vendure.io/logo.png" height="100px" style="margin-left: 30px;">
</div>

## Vue Storefront 2 integration with Vendure

This project is a Vendure integration for [Vue Storefront 2](https://github.com/vuestorefront/vue-storefront/).

## How to start if you want to try out the integration

```bash
yarn global add @vue-storefront/cli
```

```bash
vsf init <project_name>
```

Choose `Vendure` or use `Custom template from Github` option and type: `https://github.com/vuestorefront/template-vendure.git`.

```bash
cd <project_name> 
```

```bash
yarn
```

```bash
yarn dev
```

## How to start if you want to contribute?

Want to contribute? Ping us on `vendure` channel on [our Discord](https://discord.vuestorefront.io)!

### Requirements

- NodeJS v14 or later
- Vendure server running in localhost for GraphQL API or <https://demo.vendure.io/shop-api>
- Set up auth options in Vendure server (This functionality is available for those who scaffold a local instance of Vendure)

```ts
// vendure-config.ts
...
  authOptions: {
    tokenMethod: 'bearer', // authorization header method
    requireVerification: false, // disable register by email verification
  },
```

### Setting up Vendure Server

<https://www.vendure.io/docs/getting-started/>

### Steps

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
          }
        }
      }
    };
    ```

5. Build dependencies `yarn build`
6. Run `yarn dev` to run theme. You can find other commands in `package.json`

Your project will be running on `http://localhost:3001` (As Vendure server is running on port `3000`)

## Resources

- [Vue Storefront Documentation](https://docs.vuestorefront.io/v2/)
- [Vendure integration Documentation](https://docs.vuestorefront.io/vendure)
- [Vendure Documentation](https://www.vendure.io/docs/)
- [Community Chat](https://discord.vuestorefront.io)

## Support

If you have any questions about this integration we will be happy to answer them on  `vendure` channel on [our Discord](discord.vuestorefront.io).

## Contributors ✨

Thanks go to these wonderful people 🙌:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Baroshem"><img src="https://avatars.githubusercontent.com/u/37120330?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Jakub Andrzejewski</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=Baroshem" title="Code">💻</a> <a href="#maintenance-Baroshem" title="Maintenance">🚧</a> <a href="#projectManagement-Baroshem" title="Project Management">📆</a> <a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=Baroshem" title="Documentation">📖</a></td>
    <td align="center"><a href="https://rafagarcialepper.com/"><img src="https://avatars.githubusercontent.com/u/73605?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Rafael Garcia Lepper</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=rglepper" title="Code">💻</a></td>
    <td align="center"><a href="http://www.michaelbromley.co.uk/"><img src="https://avatars.githubusercontent.com/u/6275952?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Michael Bromley</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/pulls?q=is%3Apr+reviewed-by%3Amichaelbromley" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://fifciuu.com/"><img src="https://avatars.githubusercontent.com/u/30155292?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Filip Jędrasik</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/pulls?q=is%3Apr+reviewed-by%3AFifciu" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/Mateuszpietrusinski"><img src="https://avatars.githubusercontent.com/u/24594740?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Mateusz Pietrusiński</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/pulls?q=is%3Apr+reviewed-by%3AMateuszpietrusinski" title="Reviewed Pull Requests">👀</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/igorwojciechowski"><img src="https://avatars.githubusercontent.com/u/26794636?v=4?s=80" width="80px;" alt=""/><br /><sub><b>igorwojciechowski</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=igorwojciechowski" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://heitor.co/"><img src="https://avatars.githubusercontent.com/u/1626923?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Heitor Ramon Ribeiro</b></sub></a><br /><a href="#mentoring-bloodf" title="Mentoring">🧑‍🏫</a></td>
    <td align="center"><a href="https://github.com/Michaeldrm"><img src="https://avatars.githubusercontent.com/u/4975044?v=4?s=80" width="80px;" alt=""/><br /><sub><b>michael.douglas@outlook.com</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=Michaeldrm" title="Code">💻</a></td>
    <td align="center"><a href="https://www.malimlin.si/"><img src="https://avatars.githubusercontent.com/u/302135?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Milan Zivkovic</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=zmilan" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/justyna-13"><img src="https://avatars.githubusercontent.com/u/46591755?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Justyna</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=justyna-13" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
