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
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

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
                  // only user routes
                  {
                        path : 'cart',
                        element: <Cart/>,
                  },
                  {
                        path :'payment',
                        element: <Payment/>
                  },
                  {
                        path: 'paymentHistory',
                        element : <PaymentHistory/>
                  },


                  //admin routers
                  {
                        path : 'users',
                        element: <AdminRoutes><AllUsers/> </AdminRoutes>,
                  },
                  {
                        path: 'addItem',
                        element: <AdminRoutes><AddItem/></AdminRoutes>,
                  },
                  {
                        path: 'manageItem',
                        element: <AdminRoutes><ManageItem/></AdminRoutes>,
                  },
                  {
                        path : 'updateItem/:id',
                        element: <AdminRoutes><UpdateItem/></AdminRoutes>,
                        loader : ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
                  }
            ]
      }
])
