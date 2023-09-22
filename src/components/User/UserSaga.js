import { takeLatest, fork } from "redux-saga/effects";
import ACTIONS from "./UserActionsType";
import { Store } from "../../Config/Store";
import axios from "axios";


function* getUser(action) {
  const { dispatch } = Store;
  // console.log(action.payload, "request getuser");
  try {
    axios
      .get(`/apiV1/current_user_participant`)
      .then((res) => {
        // console.log(res.data, "userdata");
        dispatch({
          type: ACTIONS.FETCH_USER_SUCCESS,
          payload: res.data,
        });
        // dispatch({
        //   type: ACTIONS.FETCH_EVENTS,
        //   // payload: res.data,
        // });
        // dispatch({
        //   type: ACTIONS.FETCH_MUN,
        //   // payload: res.data,
        // });
        // getEvents();
      })
      .catch((err) => {
        if (err?.response?.status == 401) {
          if (localStorage.getItem("token")) {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            window.location.pathname = "/";
          }
          dispatch({
            type: ACTIONS.FETCH_USER_FAIL,
          });
        }
      });
  } catch (error) {
    dispatch({
      type: ACTIONS.FETCH_USER_FAIL,
    });
    console.log("get shop error: ", error);
  }
}

function* getEvents() {
  // console.log("HERE");
  const { dispatch, getState } = Store;
  // console.log(getState);
  try {
    // const { id } = user.id;
    const id = getState().user.user.id;
    axios.get(`/apiV1/registeruserevent?participant_id=${id}`).then((res) => {
      // console.log(res.data);
      var arr = [];
      for (var i = 0; i < res.data.length; i++) {
        arr.push(res.data[i].event);
      }
      // console.log(arr);
      dispatch({
        type: ACTIONS.FETCH_EVENTS_SUCCESS,
        payload: arr,
      });
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.FETCH_USER_FAIL,
    });
    console.log("get shop error: ", error);
  }
}

// function* getMasterConfig() {
//   const { dispatch, getState } = Store;
//   // console.log(getState);
//   try {
//     // const { id } = user.id;
//     axios.get(`/apiV1/master_config`).then((res) => {
//       console.log(res.data);
//       dispatch({
//         type: ACTIONS.SET_MASTER_CONFIG,
//         payload: res.data,
//       });
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: ACTIONS.FETCH_USER_FAIL,
//     });
//     console.log("get shop error: ", error);
//   }
// }
// function* getMun() {
//   const { dispatch, getState } = Store;
//   // console.log(getState);
//   try {
//     const id = getState().user.user.id;
//     axios.get(`/apiV1/is_mun_exists?participant_id=${id}`).then((res) => {
//       console.log(res.data);
//       dispatch({
//         type: ACTIONS.SET_MUN,
//         payload: res.data,
//       });
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: ACTIONS.FETCH_USER_FAIL,
//     });
//     console.log("get shop error: ", error);
//   }
// }

function* watchUsers() {
  yield takeLatest(ACTIONS.FETCH_USER_REQUEST, getUser);
  yield takeLatest(ACTIONS.FETCH_EVENTS, getEvents);
  // yield takeLatest(ACTIONS.FETCH_MASTER_CONFIG, getMasterConfig);
  // yield takeLatest(ACTIONS.FETCH_MUN, getMun);
}

// ACTION WATCHER
export default function* userSaga() {
  yield fork(watchUsers);
}
