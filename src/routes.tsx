import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './pages/LandingPage';
import TradePage from './pages/TradePage'
import FeePage from './pages/FeePage';
import TokensPage from './pages/TokensPage';
import UsersPage from './pages/UsersPage';
import AdminPage from './pages/AdminPage';

const Router = () => {
    return(
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/trade" element={<TradePage />}></Route>
                <Route path="/fee" element={<FeePage />}></Route>
                <Route path="/token" element={<TokensPage />}></Route>
                <Route path="/user" element={<UsersPage />}></Route>
                <Route path="/admin" element={<AdminPage />}></Route>
              </Routes>
              <ToastContainer />
            </BrowserRouter>
    )
}

export default Router;