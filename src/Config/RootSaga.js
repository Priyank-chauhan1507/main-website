import { put } from "redux-saga/effects";
import userSaga from "../components/User/UserSaga";

function* RootSaga() {
  yield put([userSaga()]);
}

export { RootSaga };
