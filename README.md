<div align="center">
  <img src="https://blog.vuestorefront.io/wp-content/uploads/2020/01/1QU9F6hQlFyHsJIbsdmt6FA.png" height="100px" />
  <img src="https://www.vendure.io/logo.png" height="100px" style="margin-left: 30px;">
</div>

## Vue Storefront 2 integration with Vendure (WIP)

> This integration is under development

This project is a Vendure integration for [Vue Storefront 2](https://github.com/vuestorefront/vue-storefront/).

## How to start if you want to try out the integration

Right now it's not possible.

## How to start if you want to contribute?

Want to contribute? Ping us on `vendure` channel on [our Discord](https://discord.vuestorefront.io)!

### Requirements:
  - NodeJS v14 or later
  - Vendure server running in localhost for GraphQL API or https://demo.vendure.io/shop-api

### Steps:

1. Fork the repo
2. Clone your fork of the repo
    ```
    example:
    git clone https://github.com/vuestorefront/vendure.git
    cd vendure
    ```
2. Run `yarn` to install dependencies
3. Add your Vendure server GraphQL API uri to env file in packages/api-client and packages/theme
    ```bash
    cd packages/api-client
    cp .env.example .env

    cd packages/theme
    cp .env.example .env
    ```
4. Build dependencies `yarn build`
5. Run `yarn dev` to run theme. You can find other commands in `package.json`

## Resources

- [Vue Storefront Documentation](https://docs.vuestorefront.io/v2/)
- Vendure integration Documentation - WIP
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
    <td align="center"><a href="https://github.com/Baroshem"><img src="https://avatars.githubusercontent.com/u/37120330?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Jakub Andrzejewski</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=Baroshem" title="Code">💻</a></td>
    <td align="center"><a href="https://rafagarcialepper.com/"><img src="https://avatars.githubusercontent.com/u/73605?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Rafael Garcia Lepper</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=rglepper" title="Code">💻</a></td>
    <td align="center"><a href="http://www.michaelbromley.co.uk/"><img src="https://avatars.githubusercontent.com/u/6275952?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Michael Bromley</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/pulls?q=is%3Apr+reviewed-by%3Amichaelbromley" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
