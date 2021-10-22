import ReactDOM from "react-dom";
import {addPost, RootStateType} from "./redux/state";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";


export const reRenderApp = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById("root")
    );
};