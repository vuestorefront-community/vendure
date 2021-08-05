export const defaultSettings = {
  api: "",
  cookies: {
    currencyCookieName: "vsf-currency",
    countryCookieName: "vsf-country",
    localeCookieName: "vsf-locale",
    cartCookieName: "vsf-cart",
    customerCookieName: "vsf-customer",
    storeCookieName: "vsf-store",
  },
  state: {
    getCartId: () => "",
    setCartId: () => {},
    getCustomerToken: () => "",
    setCustomerToken: () => {},
    getStore: () => "",
    setStore: () => {},
  },
};
