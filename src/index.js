import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import Root from "./Root";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";

ReactDOM.render(
  <BrowserRouter>
    <Root>
      <App>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </App>
    </Root>
  </BrowserRouter>,
  document.getElementById("root")
);
