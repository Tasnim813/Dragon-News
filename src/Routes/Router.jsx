import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Home from "../Pages/Home";
import { Component } from "react";
import CategoryNews from "../Pages/CategoryNews";


export const router=createBrowserRouter([
    {
        path:'/',
        Component:Homelayout,
        children:[
           {
            index:true,
            Component:Home

           },
            {
                path:'/category/:id',
                Component:CategoryNews,
                loader:()=> fetch('/news.json')
            }
        ]
        
    }
])