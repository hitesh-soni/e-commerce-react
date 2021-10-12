import { http } from "helpers/Interceptor";
import api from "helpers/api";
import { cart } from "store/types";
import { notification } from "antd";

/**
 * Add product to cart
 * @param {String} product_id
 */
export const addProductToCart = (product_id) => async (dispatch) => {
  dispatch({
    type: cart.ADD_TO_CART,
    payload: { product_id, quantity: 1 },
  });
};

/**
 * Remove product from cart
 * @param {String} product_id
 */
export const removeProduct = (product_id) => async (dispatch) => {
  dispatch({
    type: cart.REMOVE_FROM_CART,
    payload: product_id,
  });
};

/**
 * Get product details
 */
export const getProductDetails = (products) => async (dispatch) => {
  try {
    const data = await http.post(api.GET_CART_PRODUCTS, { products });
    const pro = {};
    data?.data?.body?.forEach((e) => {
      pro[e?._id] = e;
    });
    dispatch({
      type: cart.GET_PRODUCT_DETAILS,
      payload: pro,
    });
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

/**
 * Get address
 */
export const getAddress = () => async (dispatch) => {
  try {
    console.log("here");
    const data = await http.get(api.MANAGE_ADDRESS);
    dispatch({
      type: cart.GET_ADDRESS,
      payload: data?.data?.body,
    });
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

/**
 * Create address
 */
export const createAddress = (values) => async (dispatch) => {
  try {
    const data = await http.post(api.MANAGE_ADDRESS, values);
    dispatch({
      type: cart.APPEND_ADDRESS,
      payload: data?.data?.body,
    });
    notification["success"]({
      message: "Success",
      description: "Address created successfully",
    });
    return data;
  } catch (e) {
    notification["error"]({
      message: "Something went wrong",
      description: "Address not created",
    });
    console.log(e);
    throw e;
  }
};
