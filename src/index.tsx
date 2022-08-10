import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals();



