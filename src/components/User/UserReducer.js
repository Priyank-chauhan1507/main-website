import ACTIONS from "./UserActionsType";

const initialState = {
  user: {},
  loading: false,
  events: [],
  user_login: {},
  total_events: [],
  master_config: {},
  mun: {},
};

const userReducer = (state = initialState, action) => {
  let payload = action?.payload;

  switch (action.type) {
    /** fetch all products start */

    case ACTIONS.SIGN_UP:
      return Object.assign({}, state, {
        user: payload
      });

    case ACTIONS.FETCH_USER_REQUEST:
      // console.log("fetch");
      return Object.assign({}, state, {
        loading: true,
      });

    case ACTIONS.FETCH_USER_FAIL:
      return Object.assign({}, state, {
        loading: false,
      });

    case ACTIONS.FETCH_USER_SUCCESS:
      return Object.assign({}, state, {
        user: payload,
        loading: false,
      });

    case ACTIONS.FETCH_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        events: payload,
      });

    case ACTIONS.FETCH_EVENTS_FAIL:
      return Object.assign({}, state, {
        loading: false,
        events: payload,
      });
    case ACTIONS.SAVE_USER_LOGIN:
      return Object.assign({}, state, {
        user_login: payload,
      });

    case ACTIONS.LOGOUT:
      return Object.assign({}, state, {
        user: {},
      });
    case ACTIONS.SET_EVENTS:
      return Object.assign({}, state, {
        total_events: payload,
      });
    case ACTIONS.SET_MASTER_CONFIG:
      return Object.assign({}, state, {
        master_config: payload,
      });
    case ACTIONS.SET_MUN:
      return Object.assign({}, state, {
        mun: payload,
      });

    default:
      return state;
  }
};

export default userReducer;
