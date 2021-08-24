const path = require('path');

export function getRoutes(themeDir = __dirname) {
  return [
    {
      path: 'checkout/customer',
      name: 'customer',
      component: path.resolve(themeDir, 'pages/Checkout/Customer.vue')
    }
  ];
}
