import { http } from "helpers/Interceptor";
import api from "helpers/api";
import { products } from "store/types";

/**
 * Get products *
 * @param {String} category
 * @param {Number} page
 * @param {Number} limit
 * @returns {Object}
 */
export const getProducts =
  (category, page, limit = 9) =>
  async (dispatch) => {
    try {
      const data = await http.post(api.GET_PRODUCTS, {
        category,
        page,
        limit,
      });
      dispatch({
        type: products.GET_PRODUCTS,
        payload: {
          products: data?.data?.body,
          isNextPage: data?.data?.meta?.next_page,
          page: page,
        },
      });
      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
