import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import News from '../pages/News/News';
import PrivateRoutes from './PrivateRoutes';
import Profile from '../pages/profile/Profile';
import Dashboard from '../pages/dashboard/Dashboard';
import ErrorPages from '../pages/errorpages/ErrorPages';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPages/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=>fetch('/news.json')
            },
            {
                path:'/news/:id',
                element:<PrivateRoutes><News/></PrivateRoutes>,
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/register',
                element:<Register/>,
            },
            {
                path:'/profile',
                element:<PrivateRoutes><Profile/></PrivateRoutes>,
            },
            {
                path:'/dashboard',
                element:<PrivateRoutes><Dashboard/></PrivateRoutes>,
            },
            
        ]
    }
])


export default router;