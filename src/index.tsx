import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


import {App} from "./node_modules/App";

import './index.scss';
import store from "init/store";
import ErrorBoundry from "components/error-boundry/ErrorBoundry";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);

