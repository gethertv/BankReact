import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './components/menu/Menu'
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "react-auth-kit";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
    >
        <BrowserRouter>
            <React.StrictMode>
                <Home />
            </React.StrictMode>
        </BrowserRouter>
    </AuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
