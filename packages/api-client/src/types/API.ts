import { getProduct, getCategory, getFacet } from "../api";

export interface VendureApiMethods {
  getProduct: typeof getProduct;
  getFacet: typeof getFacet;
  getCategory: typeof getCategory;
}