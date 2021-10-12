import { products } from "../types";

const initialAuthState = {
  products: [],
  isNextPage: true,
};

const reducer = (state = initialAuthState, action = []) => {
  switch (action.type) {
    case products.GET_PRODUCTS: {
      return {
        ...state,
        products:
          action.payload.page === 1
            ? action.payload.products
            : [...state.products, ...action.payload.products],
        isNextPage: action.payload.isNextPage,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
