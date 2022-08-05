module.exports = {
  title: 'Vue Storefront 2 for Vendure',
  base: '/',
  description: 'Documentation for the Vendure connector for Vue Storefront 2',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  configureWebpack: (config) => {
    config.module.rules = config.module.rules.map(rule => ({
      ...rule,
      use: rule.use && rule.use.map(useRule => ({
        ...useRule,
        options: useRule.loader === 'url-loader' ?
          /**
            Hack for loading images properly.
            ref: https://github.com/vuejs/vue-loader/issues/1612#issuecomment-559366730
           */
          {  ...useRule.options, esModule: false } :
          useRule.options
      }))
    }))
  },
  themeConfig: {
    logo: '/vsf.svg',
    nav: [
      { text: 'Vue Storefront', link: 'https://vuestorefront.io/' },
			{ text: 'Main Docs', link: 'https://docs.vuestorefront.io/v2/' },
			{ text: 'Github', link: 'https://github.com/vuestorefront/vendure' }
		],
    sidebar: [
      {
        title: 'Essentials',
        collapsable: false,
        children: [
          ['/', 'Introduction'],
          ['/guide/getting-started', 'Getting started'],
          ['/guide/configuration', 'Configuration'],
          ['/guide/about', 'About'],
        ]
      },
      {
        title: 'Composables',
        collapsable: true,
        children: [
          ['/composables/use-product', 'useProduct'],
          ['/composables/use-category', 'useCategory'],
          ['/composables/use-facet', 'useFacet'],
          ['/composables/use-cart', 'useCart'],
          ['/composables/use-billing', 'useBilling'],
          ['/composables/use-shipping', 'useShipping'],
          ['/composables/use-shipping-provider', 'useShippingProvider'],
          ['/composables/use-user', 'useUser'],
          ['/composables/use-payment', 'usePayment'],
          ['/composables/use-user-order', 'useUserOrder'],
          ['/composables/use-user-shipping', 'useUserShipping'],
          ['/composables/use-user-billing', 'useUserBilling'],
          ['/composables/use-related-products', 'useRelatedProducts'],
          ['/composables/use-wishlist', 'useWishlist'],
          ['/composables/use-forgot-password', 'useForgotPassword']
        ]
      },
      {
        title: 'Theme',
        collapsable: true,
        children: [
          ['/theme/customer-checkout', 'Customer step in checkout'],
          ['/theme/composables', 'Composables'],
          ['/theme/helpers', 'Helpers'],
          ['/theme/update-email', 'Update user email'],
          ['/theme/middleware', 'Middleware'],
        ]
      },
      {
        title: 'Cookbook',
        collapsable: true,
        children: [
          ['/cookbook/https', 'HTTPS configuration'],
          ['/cookbook/multistore', 'Multistore'],
          ['/cookbook/custom-api-methods', 'Custom API Methods'],
        ]
      },
      {
        title: 'API Reference',
        collapsable: true,
        children: [
          ['/api-reference/api-client/vendure-api', 'Api Client'],
          ['/api-reference/composables/vendure', 'Composables']
        ]
      },
      {
        title: 'Integrations',
        collapsable: true,
        children: [
          ['/integrations/storyblok', 'Storyblok'],
          ['/integrations/stripe', 'Stripe'],
        ]
      },
      {
        title: 'Changelog',
        collapsable: true,
        children: [
          ['/changelog/1.0.0', '1.0.0'],
          ['/changelog/1.0.0-beta.3', '1.0.0-beta.3'],
          ['/changelog/1.0.0-beta.2', '1.0.0-beta.2'],
          ['/changelog/1.0.0-beta.1', '1.0.0-beta.1'],
          ['/changelog/1.1.0', '1.1.0'],
          ['/changelog/1.2.0', '1.2.0'],
        ]
      },
    ]
  }
}
