import { combineReducers } from "redux";
import category from "./category";
import cart from "./cart";
import products from "./products";
import order from "./order";
import auth from "./auth";

export default combineReducers({
  category,
  products,
  auth,
  order,
  cart,
});
