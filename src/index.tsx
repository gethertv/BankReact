import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AuthProvider, RequireAuth} from "react-auth-kit";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Panel from "./pages/Panel";
import LoginPage from "./components/Pages/Login/LoginPage";

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
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/register" element={<About />}/>
                    <Route path="/panel" element={
                            <Panel />
                    }/>
                    <Route path="/panel/transfer" element={
                            <Panel />
                    }/>
                    <Route path="/login" element={ <LoginPage /> } />
                </Routes>
            </React.StrictMode>
        </BrowserRouter>
    </AuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
