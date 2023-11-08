import React from 'react'
import ReactDOM from 'react-dom/client'
import { SkeletonTheme } from 'react-loading-skeleton';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root/Root.jsx';
import Home from './assets/Components/Home/Home.jsx';
import AvailableFoods from './assets/Components/Home/AvailableFoods.jsx';
import SIngleFood from './assets/Components/SIngleData/SIngleFood.jsx';
import ErrorPage from './assets/Components/Root/ErrorPage.jsx';
import MyFoods from './assets/Components/MyFoods/MyFoods.jsx';
import AddAFood from './assets/Components/MyFoods/AddAFood.jsx';
import Login from './assets/Components/Authentication/Login';
import Register from './assets/Components/Authentication/Register.jsx';
import AuthProvider, { AuthContext } from './assets/Components/Authentication/AuthProvider.jsx';
import PrivateRoute from './assets/Components/Authentication/PrivateRoute.jsx';
import AboutUS from './assets/Components/SIngleData/AboutUs.jsx';
import ManageFoods from './assets/Components/MyFoods/ManageFoods.jsx';
import News from './assets/Components/SIngleData/News.jsx';
import ManageReq from './assets/Components/MyFoods/ManageReq.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
    },
      {
        path:'/RizkShare/AvialableFoods',
        element:<AvailableFoods/>
    },
      {
        path:'/RizkShare/RequestedFood',
        element:<PrivateRoute><MyFoods/></PrivateRoute>
    },
      {
        path:'/RizkShare/ManageFoods',
        element:<PrivateRoute><ManageFoods/></PrivateRoute>
    },
      {
        path:'RizkShare/Login',
        element:<Login/>
    },
      {
        path:'RizkShare/Register',
        element:<Register/>
    },
      {
        path:'RizkShare/AboutUs',
        element:<AboutUS/>
    },
      {
        path:'RizkShare/News',
        element:<News/>
    },
      {
        path:'RizkShare/AddFood',
        element:<PrivateRoute><AddAFood/></PrivateRoute>
    },
      {
        path:'RizkShare/:id',
        element:<SIngleFood/>,
        loader:({params})=> fetch(`https://zayed-rizkshare-server.vercel.app/RizkShare/SingleFood/${params.id}`) 
    },
      {
        path:'RizkShare/ManageReq/:id',
        element:<ManageReq/>,
        loader:({params})=> fetch(`https://zayed-rizkshare-server.vercel.app/RizkShare/ManageFoods/${params.id}`) 
    },





  ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
       
 <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     </SkeletonTheme>
   
  </React.StrictMode>,
)
