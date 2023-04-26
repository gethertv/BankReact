import React from "react";
import {Routes, Route} from 'react-router-dom';
import LoginForm from "../login/LoginForm";
import {RequireAuth} from "react-auth-kit";
const Menu = () => {
    return (
        <div>
            <a href="/panel">
                Panel
            </a>
            <a href="/login">
                Logowanie
            </a>
            <Routes>
                <Route path="/panel" element={
                    <RequireAuth loginPath="/login">
                        <LoginForm />
                    </RequireAuth>
                }/>
                <Route path="/login" element={ <LoginForm /> } />
                <Route path="/users" />
            </Routes>
        </div>
    );
};

export default Menu;