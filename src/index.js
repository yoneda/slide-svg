import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './containers/App.js';
import reducer from "./reducers/reducer.js";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import { readRawMarkdownSuccess } from "./actions/actions.js";

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(readRawMarkdownSuccess("## xxx\n## yyy\n ## zzz\n"));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)
