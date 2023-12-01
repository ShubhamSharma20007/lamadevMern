import React from 'react'
import Slider from '../components/Slider/Slider';
import Productcart from '../components/Productcart/Productcart';
import Categories from '../components/categories/Categories';
import axios from 'axios'
import { useEffect } from 'react';
const Dashboard = () => {
const fetchData =async()=>{
  const res = await axios.get(process.env.MY_API_TOKEN)
  const data =await res.data;
  console.log(data);
}

useEffect(()=>{
  fetchData()
})
  return (
    <div>
    <Slider></Slider>
    <Productcart></Productcart>
    <Categories></Categories>
    </div>
  )
}

export default Dashboard
