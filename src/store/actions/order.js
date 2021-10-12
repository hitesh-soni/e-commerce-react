import { http } from "helpers/Interceptor";
import api from "helpers/api";
import { cart, order } from "store/types";
import { notification } from "antd";

/**
 * Get address
 */
export const getOrders = () => async (dispatch) => {
  try {
    const data = await http.get(api.LIST_ORDER);
    dispatch({
      type: order.GET_ORDER,
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
export const placeOrder = (values) => async (dispatch) => {
  try {
    const data = await http.post(api.CREATE_ORDER, values);
    dispatch({
      type: cart.CLEAR_CART,
    });
    notification["success"]({
      message: "Success",
      description: "Order placed successfully",
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
