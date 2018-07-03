import React from "react";
import { render } from "react-dom";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
