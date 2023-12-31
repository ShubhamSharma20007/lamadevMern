import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyState from './context/MyState.jsx';
import { useState } from "react";
import Dashboard from "./pages/Dashboard.jsx"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import './index.css'
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Product from './pages/Product.jsx';
import Productoverview from './pages/Productoverview.jsx';

const Layout =()=>{
  return(
    <div className="app">
      <Navbar></Navbar>
      <Outlet/>
      <Footer></Footer>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/product',
        element:<Product></Product>
      },
      {
        path:'/productoverview/:id',
        element:<Productoverview></Productoverview>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyState>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </MyState>
  </React.StrictMode>,
)
