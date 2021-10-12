import { category } from "../types";

const initialAuthState = {
  categories: [],
};

const reducer = (state = initialAuthState, action = []) => {
  switch (action.type) {
    case category.GET_CATEGORY: {
      return { ...state, categories: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
