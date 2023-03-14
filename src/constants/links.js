export const LINK_LOGIN = "/login";
export const LINK_SIGNUP = "/signUp";
export const LINK_ADMIN = "/admin";
export const LINK_DEF = "/";
export const LINK_ALL = "*";
export const LINK_USER_PROFILE = "/userProfile";
export const LINK_RESET_PASS = "/resetPassword";
export const LINK_CATEGORIES = "/categories";
export const LINK_PRODUCTS_LIST = `/categories/:categoryLink/products`;
export const LINK_PRODUCT_PAGE = `${LINK_PRODUCTS_LIST}/:productId`;
export const LINK_PRODUCT_PAGE_FNC = (categoryLink,productId) => {
    return `/categories/${categoryLink}/products/${productId}`;
}
export const LINK_CATEGORY_PAGE_FNC = (categoryLink) => {
    return `/categories/${categoryLink}/products`;
}
export const LINK_FAVORITES_PAGE = "/favorites";
export const LINK_BASKET_PAGE = "/basket";

export const LINK_ORDER_PAGE = "/order";
