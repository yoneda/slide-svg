import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './containers/App.js';
import reducer from "./reducers/reducer.js";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import { getCreateSlides } from "./actions/actions.js";
import { convertMarkdownToHtml } from "./utils/convertMarkdownToHtml";
import markdownPath from "./content.md";

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

fetch(markdownPath)
.then(res=>res.text())
.then(text=>{
    const htmlList = convertMarkdownToHtml(text);
    store.dispatch(getCreateSlides(htmlList));
})


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)
