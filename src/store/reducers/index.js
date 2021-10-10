import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { CONSTANTS } from "helpers/constants";
import { auth } from "store/types";

const initialAuthState = {
  user: undefined,
  authToken: {
    refreshToken: undefined,
    accessToken: undefined,
  },
};

const reducer = persistReducer(
  { storage, key: CONSTANTS.PERSIST_KEY, whitelist: ["user", "authToken"] },
  (state = initialAuthState, action = []) => {
    switch (action.type) {
      case auth.LOGIN: {
        const { authToken, user } = action.payload;
        return { ...state, authToken, user };
      }
      case auth.LOGOUT:
        return initialAuthState;
      default: {
        return state;
      }
    }
  }
);

export default reducer;
