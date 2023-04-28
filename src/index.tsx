import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AuthProvider, RequireAuth} from "react-auth-kit";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./components/login/LoginForm";
import About from "./pages/About";

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
                    <Route path="/o-nas" element={<About />}/>
                    <Route path="/kontakt" element={<About />}/>
                    <Route path="/panel" element={
                        <RequireAuth loginPath="/login">
                            <LoginForm />
                        </RequireAuth>
                    }/>
                    <Route path="/login" element={ <LoginForm /> } />
                </Routes>
            </React.StrictMode>
        </BrowserRouter>
    </AuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
