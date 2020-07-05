import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


import {App} from "./node_modules/App";
import {Header} from "components/header/Header";

import './index.scss';
import store from "init/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

