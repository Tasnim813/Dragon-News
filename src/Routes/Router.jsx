import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Home from "../Pages/Home";
import { Component } from "react";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AuthLayot from "../Layout/AuthLayot";
import Newsdetails from "../Pages/Newsdetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Homelayout,
        children: [
            {
                index: true,
                Component: Home

            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]

    },
    {
        path: '/auth',
        Component: AuthLayot,
        children: [
            {
                index: true,
                Component: Login
            },
            {
                path: '/auth/registration',
                Component: Registration
            }
        ]
    }, {
        path: '/news-details/:id',
        element: <PrivateRoute>
            <Newsdetails></Newsdetails>
        </PrivateRoute>,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>
    }
])