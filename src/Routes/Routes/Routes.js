import { createBrowserRouter } from "react-router-dom";
import Category from "../../components/Category/Category";
import ViewDetails from "../../components/ViewDetails/ViewDetails";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Second from "../../Layout/Second";
import AddAProduct from "../../Pages/AddAProduct/AddAProduct";
import Blogs from "../../Pages/Blogs/Blogs";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllUsers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import ReportedItem from "../../Pages/Dashboard/ReportedItem/ReportedItem";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import PaymentFail from "../../Pages/PaymentFail/PaymentFail";
import PaymentSuceess from "../../Pages/PyamentSuccess/PaymentSuceess";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/category/:name',
        element: <Category/>,
        loader: ({params}) => fetch(`http://localhost:5000/category?name=${params.name}`)
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute><ViewDetails/></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/viewDetails?id=${params.id}`)
      },
      {
        path: '/blogs',
        element: <Blogs/>
      },
      {
        path:'/payment/success',
        element: <PaymentSuceess/>
      },
      {
        path: 'payment/fail',
        element: <PaymentFail/>
      }
    ],
  },
  {
    path: "/v2",
    element: <Second></Second>,
    children: [
      {
        path: "/v2/login",
        element: <Login />,
      },
      {
        path: "/v2/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/v3/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout/>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/v3/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/v3/dashboard/myOrder',
        element: <MyOrders/>
      },
      {
        path: '/v3/dashboard/addProduct',
        element: <SellerRoute><AddAProduct/></SellerRoute>
      },
      {
        path: '/v3/dashboard/allsellers',
        element: <AllUsers/>
      },
      {
        path: '/v3/dashboard/allbuyers',
        element: <AdminRoute><AllBuyers/></AdminRoute>
      },
      {
        path: '/v3/dashboard/addAProduct',
        element: <AddAProduct/>
      },
      {
        path: '/v3/dashboard/myProduct',
        element: <MyProduct/>
      },
      {
        path: '/v3/dashboard/myBuyer',
        element: <MyBuyers/>
      },
      {
        path: '/v3/dashboard/reported',
        element: <ReportedItem/>
      }
    ]
  }
]);

export default router;
