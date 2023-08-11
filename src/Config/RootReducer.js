import { combineReducers } from "redux";
import userReducer from "../components/User/UserReducer";

const appReducer = combineReducers({
  user: userReducer,
});

const RootReducer = (state, action) => {
  // clearing redux state when user logs out
  if (action.type === "LOGOUT_SUCCESS") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default RootReducer;
