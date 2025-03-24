import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Outlet from '../Outlet/Outlet';
import Home from '../Components/Pages/Home/Home/Home';
import Products from '../Components/Pages/AllProducts/Products/Products';
import RegisterForm from '../Components/Pages/RegisterForm/RegisterForm';
import LoginForm from '../Components/Pages/LoginForm/LoginForm';
import Secret from '../Sheard/Secret/Secret';
import PrivetRouts from './PrivetRouts';
import ProductsDetailsPage from '../Components/Pages/ProductsDetailsPage/ProductsDetailsPage';
import Dashboard from '../Outlet/DashBoard/Dashboard';
import Carts from '../Components/Pages/Dashboard/Carts/Carts';

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
                path : '/allProducts/:category',
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
            {
                path : '/secret',
                element : <PrivetRouts><Secret></Secret></PrivetRouts>
            },
            {
                path : '/products/:id',
                element : <ProductsDetailsPage></ProductsDetailsPage>,
                loader : ({params}) => fetch(`http://localhost:3000/products/${params.id}`)
            }
        ]
    }, 
    {
        path : 'dashboard',
        element : <Dashboard></Dashboard>,
        children : [
            {
                path : 'cart',
                element : <PrivetRouts><Carts></Carts></PrivetRouts>
            }
        ]
    }
])

export default Routers;