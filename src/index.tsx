import React from "react";
import "./index.css";
import { reduxStore } from "./redux/redux-store";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import {Provider} from "react-redux";
import {AppContainer} from "./AppContainer";




  ReactDOM.render(
    <HashRouter>
      <Provider store={reduxStore}>
        <AppContainer />
      </Provider>
    </HashRouter>,
    document.getElementById("root"));



