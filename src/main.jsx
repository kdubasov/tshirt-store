import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router.jsx";

//css
import "./styles/main.css";
import "./styles/variables.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// router
import {BrowserRouter} from "react-router-dom";

//providers
import {Provider} from "react-redux";
import {store} from "./redux-store/store.js";
import {AuthContextProvider} from "./context-providers/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthContextProvider>
            <Provider store={store}>
                <React.StrictMode>
                    <Router />
                </React.StrictMode>
            </Provider>
        </AuthContextProvider>
    </BrowserRouter>
)
