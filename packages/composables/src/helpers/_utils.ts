export const createPrice = (price: number): number => {
  return price ? price / 100 : 0;
};
export const getWishlist = () => {
  if (!localStorage.getItem('wishlist') || localStorage.getItem('wishlist') === '1') {
    setWishlist([]);
  }
  return JSON.parse(localStorage.getItem('wishlist'));
}
export const setWishlist = (wishlist) => {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}