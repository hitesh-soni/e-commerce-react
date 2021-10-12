import { http } from "helpers/Interceptor";
import api from "helpers/api";
import { category } from "store/types";

/**
 * Get categories
 */
export const getCategories = () => async (dispatch) => {
  try {
    const data = await http.get(api.GET_CATEGORIES);
    dispatch({
      type: category.GET_CATEGORY,
      payload: data?.data?.body,
    });
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
