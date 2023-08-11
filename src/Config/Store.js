import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./RootReducer";
import createSagaMiddleware from "redux-saga";
import { RootSaga } from "./RootSaga";

let state = RootReducer;
let sagaMiddleware = createSagaMiddleware({
  onError: (err) => {
    alert("There is some problem. Please check console!");
    console.error("ERROR", err);
  },
});

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;
const Store = createStore(
  state,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(RootSaga);

export { Store };
