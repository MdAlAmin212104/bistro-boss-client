import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoutes from "./Private/PrivateRoutes";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes/AdminRoutes";

export const Router = createBrowserRouter([
      {
            path: '/',
            element: <Main />,
            children: [
                  {
                        path: '/',
                        element: <Home/>,
                  },
                  {
                        path: 'menu',
                        element: <Menu/>
                  },
                  {
                        path: 'order/:category',
                        element: <Order/>,
                  },
                  {
                        path: '/login',
                        element: <Login/>
                  },
                  {
                        path: '/singUp',
                        element: <SingUp/>
                  }
            ]
      },
      {
            path: 'dashboard',
            element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
            children: [
                  {
                        path : 'cart',
                        element: <Cart/>,
                  },
                  {
                        path : 'users',
                        element: <AdminRoutes><AllUsers/> </AdminRoutes>,
                  },
                  {
                        path: 'addItem',
                        element: <AdminRoutes><AddItem/></AdminRoutes>,
                  }
            ]
      }
])
