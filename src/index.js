import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
