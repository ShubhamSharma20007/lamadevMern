import React from 'react';
import { Link } from 'react-router-dom';
import "./categories.scss"


import Productcart from '../Productcart/Productcart';
const Categories = () => {

  return (
    <div>
      <div className="categories-section m-0 w-full flex   ">
        <div className="col w-1/4 md:w-1/3 md:flex flex-col ">

          <div className="row border-solid border-2 border-white relative ">
            <img src="https://plus.unsplash.com/premium_photo-1700316993751-e79a424660dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" className="object-cover cate-btn opacity-80 h-full w-full flex-1 " alt="" />
            <button type="button" className="text-black font-semibold  bg-white hover:opacity-80 p-2 rounded-sm   absolute left-1/2 top-1/2  md:block hidden  -translate-x-1/2 -translate-y-1/2">Women</button>

          </div>
          <div className="row  border-solid border-2 border-white relative  ">
            <img src="https://images.unsplash.com/photo-1575310424203-60341936ef39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNvcmllc3xlbnwwfHwwfHx8MA%3D%3D" className="cate-btn object-cover opacity-80  h-full w-full flex-1" alt="" />
            <button type="button" className="text-black font-semibold bg-white hover:opacity-80 p-2 rounded-sm   absolute left-1/2 top-1/2  md:block hidden  -translate-x-1/2 -translate-y-1/2">Men</button>
          </div>
        </div>
        <div className="col w-1/4 md:w-1/3 border-solid border-2 border-white relative ">
        <Link to="/product">
          <img src="https://plus.unsplash.com/premium_photo-1700801992428-6db75bbffa7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" className="cate-btn object-cover opacity-80  h-full w-full" alt="" />
          <button type="button" className="text-black font-semibold bg-white hover:opacity-80 p-2 rounded-sm   absolute left-1/2 top-1/2  md:block hidden  -translate-x-1/2 -translate-y-1/2" >Clothes</button>
        </Link>
        </div>
        <div className=" col w-2/4 md:w-2/3  relative">
        <div className="flex">
          <div className="row border-solid border-2 border-white relative" >
            <img src="https://images.unsplash.com/photo-1545608444-f045a6db6133?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpbnRlciUyMHN0b3JlfGVufDB8fDB8fHww" className="cate-btn object-cover opacity-80  h-full w-full" alt="" />
            <button type="button" className="text-black font-semibold bg-white hover:opacity-80 p-2 rounded-sm   absolute left-1/2 top-1/2  md:block hidden  -translate-x-1/2 -translate-y-1/2">New Season</button>
          </div>
          <div className="row border-solid border-2 border-white relative">
            <img src="https://images.unsplash.com/photo-1494515426402-f1980ace7a9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bW1lciUyMHN0b3JlfGVufDB8fDB8fHww"
            className="cate-btn object-cover opacity-80  h-full w-full"  alt="" />
              <button type="button" className="text-black font-semibold bg-white hover:opacity-80 p-2 rounded-sm   absolute left-1/2 top-1/2  md:block hidden  -translate-x-1/2 -translate-y-1/2">New</button>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1560079616-a788c0a654e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWNjZXNvcmllc3xlbnwwfHwwfHx8MA%3D%3D"
        className="cate-btn object-cover opacity-80 border-solid border-2 border-white  w-full"  alt=""/>
        <button type="button" className="text-black font-semibold bg-white hover:opacity-80 p-2 rounded-sm   absolute left-1/2 top-[65%]  md:block hidden  -translate-x-1/2 -translate-y-1/2">Accessories</button>
        </div>
       
      </div>
      <Productcart></Productcart>
    </div>
  );
};

export default Categories;
