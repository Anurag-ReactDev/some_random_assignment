import React from "react";
import ReactDom from "react-dom/client"


import LandingPage from "./components/LandingPage";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Settings from "./components/Settings";


import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";


const root = document.getElementById("root")

const rootInit = ReactDom.createRoot(root)


const AppLayout = ()=>{
    return(
        <>
            <LandingPage/>
            <Outlet/>
        </>
    )
}

const appRoute = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
    },
    {
        path:"/createAccount",
        element:<CreateAccount/>,
    },
    {
        path:"/login",
        element:<Login/>,
    },
    {
        path:"/accountSettings",
        element:<Settings/>,
    }
])
rootInit.render(

    <RouterProvider router={appRoute}/>
);
   