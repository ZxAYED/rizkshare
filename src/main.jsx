import React from 'react'
import ReactDOM from 'react-dom/client'

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
        path:'RizkShare/AvialableFoods',
        element:<AvailableFoods/>
    },
      {
        path:'RizkShare/MyFoods',
        element:<MyFoods/>
    },
      {
        path:'RizkShare/AddFood',
        element:<AddAFood/>
    },
      {
        path:'RizkShare/:id',
        element:<SIngleFood/>,
        loader:({params})=> fetch(`http://localhost:5000/RizkShare/${params.id}`) 
    },





  ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
