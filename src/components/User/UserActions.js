import ACTIONS from "./UserActionsType";
import setAuthToken from "./setAuthToken";

export const login = (params = {}) => {
  // console.log(params);
  localStorage.setItem("token", params?.data?.access);
  localStorage.setItem("user_id", params?.data?.user_id);
  setAuthToken(localStorage.getItem("token"));
  return {
    type: ACTIONS.SIGN_UP,
    payload: params,
  };
};

export const fetchUser = (params = {}) => {
  // console.log("I AM HERE", params);
  return {
    type: ACTIONS.FETCH_USER_REQUEST,
    payload: params,
  };
};

export const fetchEvents = (params = {}) => {
  return {
    type: ACTIONS.FETCH_EVENTS,
  };
};

export const fetchMun = (params = {}) => {
  return {
    type: ACTIONS.FETCH_MUN,
  };
};

export const fetchMasterConfig = (params = {}) => {
  return {
    type: ACTIONS.FETCH_MASTER_CONFIG,
  };
};

export const saveUserLogin = (params = {}) => {
  return {
    type: ACTIONS.SAVE_USER_LOGIN,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  window.location.pathname = "/";
  return {
    type: ACTIONS.LOGOUT,
  };
};
