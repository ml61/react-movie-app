import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context";

import "./index.css";
import "./bootstrap/bootstrap.min.css";
import "fontsource-roboto";
// import { Provider } from "react-redux";
// import store from "./store";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector("#root")
);
