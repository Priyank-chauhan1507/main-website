import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import { Store } from "./Config/Store";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
axios.defaults.baseURL = "https://api1.thomso.in";
axios.defaults.headers.common.Authorization = `${
  localStorage.getItem("token") === null
    ? ``
    : `Bearer ${localStorage.getItem("token")}`
}`;
axios.defaults.headers.post["Content-Type"] = "application/json";


ReactDOM.render(
  <Provider store={Store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);




