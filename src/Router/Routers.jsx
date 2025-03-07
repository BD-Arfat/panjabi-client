import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Outlet from '../Outlet/Outlet';
import Home from '../Components/Pages/Home/Home/Home';
import Products from '../Components/Pages/AllProducts/Products/Products';
import RegisterForm from '../Components/Pages/RegisterForm/RegisterForm';
import LoginForm from '../Components/Pages/LoginForm/LoginForm';

const Routers = createBrowserRouter([
    {
        path : '/',
        element : <Outlet></Outlet>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
            ,
            {
                path : '/allProducts',
                element : <Products></Products>
            },
            {
                path : '/RegisterForm',
                element : <RegisterForm></RegisterForm>
            },
            {
                path : '/loginForm',
                element : <LoginForm></LoginForm>
            },
        ]
    }
])

export default Routers;