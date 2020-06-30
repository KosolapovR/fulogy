import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from "./state/store";
import {Provider} from "react-redux";
import './index.css';
import './fonts/Fontfabric - MullerMedium.otf';
import './fonts/Fontfabric - MullerExtraBold.otf';
import './fonts/Fontfabric - MullerBold.otf';

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root')
);
