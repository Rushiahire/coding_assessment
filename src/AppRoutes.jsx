import React from 'react';
import { Routes,Route } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import Home from './components/Home/Home';
import ListingPage from './components/Listing/ListingPage';
import FormPage from './components/Form/FormPage';



const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path={"/"}  element={<Home/>} />
        <Route path={"/login"}  element={<LoginPage/>} />
        <Route path={"/Form"}  element={<FormPage/>} />
        <Route path={"/List"}  element={<ListingPage/>} />

    </Routes>
    </>
  )
}

export default AppRoutes