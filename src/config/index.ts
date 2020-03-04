//@ts-nocheck
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export const wooApi = new WooCommerceRestApi({
  url: 'http://reactecommercewp.test',
  consumerKey: 'ck_35a8627153ced2f4b7325411f48c8c9287e6da51',
  consumerSecret: 'cs_09c1586f3f9e26e1aff292624acfa6a03ffca399',
  version: 'wc/v3'
});

export const CART_COOKIE_NAME = 'CART_ITEMS';
