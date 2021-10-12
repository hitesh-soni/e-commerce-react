import { cart } from "../types";
import { CONSTANTS } from "helpers/constants";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialAuthState = {
  products: [],
  productDetails: {},
  address: [],
};

const reducer = persistReducer(
  {
    storage,
    key: CONSTANTS.PERSIST_KEY_CART,
    whitelist: ["products", "productDetails"],
  },
  (state = initialAuthState, action = []) => {
    switch (action.type) {
      case cart.ADD_TO_CART: {
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }
      case cart.REMOVE_FROM_CART: {
        return {
          ...state,
          products: state.products.filter(
            (e) => e.product_id !== action.payload
          ),
        };
      }
      case cart.GET_PRODUCT_DETAILS: {
        return {
          ...state,
          productDetails: action.payload,
        };
      }
      case cart.GET_ADDRESS: {
        return {
          ...state,
          address: action.payload,
        };
      }
      case cart.APPEND_ADDRESS: {
        return {
          ...state,
          address: [...state.address, action.payload],
        };
      }
      case cart.CLEAR_CART: {
        return {
          ...state,
          products: [],
          productDetails: {},
          address: [],
        };
      }
      default: {
        return state;
      }
    }
  }
);

export default reducer;
