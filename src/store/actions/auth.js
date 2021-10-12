import { http } from "helpers/Interceptor";
import api from "helpers/api";
import { auth } from "store/types";
import { notification } from "antd";

/**
 * Login action api call
 *
 * @param {String} email
 * @param {String} password
 */
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const { data } = await http.post(api.LOGIN_USER, { email, password });

    if (data.success) {
      dispatch({
        type: auth.LOGIN,
        payload: {
          authToken: {
            access_token: data?.body?.access_token,
            refresh_token: data?.body?.refresh_token,
          },
          user: data?.body?.user,
        },
      });
    }
  } catch (e) {
    notification["error"]({
      message: "Can't login",
      description:
        "The email and password you entered did not match our records. Please check and try again.",
    });
  }
};

/**
 * Logout from system
 */
export const logoutUser = () => async (dispatch) => {
  dispatch({
    type: auth.LOGOUT,
  });
};
