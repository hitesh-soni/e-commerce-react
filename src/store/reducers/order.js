import { order } from "../types";

const initialAuthState = {
  orders: [],
};

const reducer = (state = initialAuthState, action = []) => {
  switch (action.type) {
    case order.GET_ORDER: {
      return {
        ...state,
        orders: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
