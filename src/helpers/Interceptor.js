import { useEffect } from "react";
import { auth as authType } from "store/types";
import axios from "axios";
import api from "helpers/api";

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 9000000,
});

/**
 * Request intercept
 *
 * @param {*} store
 */
const requestIntercept = (store) => {
  return http.interceptors.request.use(
    // Fetch access token
    (config) => {
      const {
        auth: {
          authToken: { access_token },
        },
      } = store.getState();

      if (access_token) config.headers.Authorization = `Bearer ${access_token}`;

      return config;
    },
    (err) => Promise.reject(err)
  );
};

/**
 * Respopnse intercept
 *
 * @param {*} store
 */
const responseIntercept = (store) => {
  return http.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response) {
        // Get previous request
        const originalRequest = error.response.config;
        // Prevent infinite loop
        if (originalRequest.url === api.REFRESH_TOKEN) {
          store.dispatch({ type: authType.LOGOUT });
          return Promise.reject(error);
        }
        // check for response status
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          // Fetch refresh token
          const {
            auth: {
              authToken: { refresh_token },
            },
          } = store.getState();
          // Refresh access token
          return http
            .post(api.REFRESH_TOKEN, {
              refresh_token,
            })
            .then((res) => {
              if (res.status === 200) {
                store.dispatch({
                  type: authType.REFRESH_TOKEN,
                  payload: { authToken: res.data.body },
                });
                axios.defaults.headers.common["Authorization"] =
                  "Bearer " + res.data.data.access_token;
                return axios(originalRequest);
              }
            });
        }
      }
      return Promise.reject(error);
    }
  );
};

/**
 * Add auth token if not expired
 *
 * @param {*} store
 */
const Interceptor = ({ store, children }) => {
  useEffect(() => {
    const req = requestIntercept(store);
    const res = responseIntercept(store);
    return () => {
      http.interceptors.request.eject(req);
      http.interceptors.response.eject(res);
    };
  }, []);

  return children;
};

export default Interceptor;
