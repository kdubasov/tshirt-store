import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router.jsx";

//css
import "./styles/main.css";
import "./styles/variables.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// router
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    </BrowserRouter>
)
