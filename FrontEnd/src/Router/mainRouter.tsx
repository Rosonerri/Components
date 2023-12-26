import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout";
import HomeScreen from "../Pages/HomeScreen";
import Register from "../Pages/Register";
import Login from "../Pages/Login"
import ResetPass from "../Pages/ResetPass"
import HeaderComp from "../Stacks/HeaderComp";
import FormComp from "../Stacks/FormComp";
import InputComp from "../Stacks/InputComp";
import SearchComp from "../Stacks/SearchComp";
import DashBoardComp from "../Stack2/DashBoard/DashBoardComp";

export const mainRouter =  createBrowserRouter ([
{
    path: "/",
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <HomeScreen/>
        }
    ]
},
{
    path: "/register",
    element: <Register/>
},
{
    path: "/login",
    element: <Login/>
},
{
    path: "/reset",
    element: <ResetPass/>
},
{
    path: "/HeaderComp",
    element: <HeaderComp/>
},
{
    path: "/FormComp",
    element: <FormComp/>
},
{
    path: "/InputComp",
    element: <InputComp/>
},
{
    path: "/SearchComp",
    element: <SearchComp/>
},
{
    path: "/DashBoardComp",
    element: <DashBoardComp/>
},
])