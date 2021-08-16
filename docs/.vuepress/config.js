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
        ]
      },
    ]
  }
}
