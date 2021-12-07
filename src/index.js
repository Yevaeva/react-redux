import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import Root from "./Root";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Root>
      <App />
    </Root>
  </BrowserRouter>,
  document.getElementById("root")
);
