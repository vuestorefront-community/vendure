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
    logo: 'https://camo.githubusercontent.com/48c886ac0703e3a46bc0ec963e20f126337229fc/68747470733a2f2f643968687267346d6e767a6f772e636c6f756466726f6e742e6e65742f7777772e76756573746f726566726f6e742e696f2f32383062313964302d6c6f676f2d76735f3062793032633062793032633030303030302e6a7067',
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
        collapsable: false,
        children: [
          ['/composables/use-product', 'useProduct'],
          ['/composables/use-category', 'useCategory'],
          ['/composables/use-facet', 'useFacet'],
          ['/composables/use-cart', 'useCart'],
          ['/composables/use-billing', 'useBilling'],
          ['/composables/use-shipping', 'useShipping'],
          ['/composables/use-shipping-provider', 'useShippingProvider'],
          ['/composables/use-user', 'useUser']
        ]
      },
    ]
  }
}
