//@ts-nocheck
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export const wooApi = new WooCommerceRestApi({
  url: 'https://react-ecommerce.lougiequisel.com',
  consumerKey: 'ck_64aa28b5e566c317b5a9a809fa6f07b19e646abc',
  consumerSecret: 'cs_a56e63dc12ab253643dc05a7c6b934024aee55cf',
  version: 'wc/v3',
  queryStringAuth: true
});
