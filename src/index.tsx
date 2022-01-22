import React from "react";
import "./index.css";
import { reduxStore } from "./redux/redux-store";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import {AppContainer} from "./App";




  ReactDOM.render(
    <BrowserRouter>
      <Provider store={reduxStore}>
        <AppContainer />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root"));



