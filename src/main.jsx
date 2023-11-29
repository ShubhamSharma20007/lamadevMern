import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
        path:'/product/:id',
        element:<Product></Product>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
