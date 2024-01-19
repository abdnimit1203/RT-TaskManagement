import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:'/dashboard',
                element: <Dashboard/>
            }
        ]

    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/register",
        element: <Register/>
    },
])