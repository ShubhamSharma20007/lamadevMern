import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";
import Productcart from "../components/Productcart/Productcart";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



const Product = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // change the range slider value
  const [value, setValue] = useState(10000);
 const [sort,setSort] = useState(null)


 // send the id
const navigate = useNavigate();
 const sendId =(e)=>{
  navigate(`/productoverview/${e}`)
 }



  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '/',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //   imageSrcs :'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //   imageSrcs :'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$34',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //   imageSrcs :'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //   imageSrcs :'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    
    
  ]
  return (
    <>
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t ml-5 border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                    role="list"
                    className="space-y-4 border-b mt-4 border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
        
                    <div className="inputitem flex  items-center gap-4">
                      <input type="checkbox" name="catebtn" id="1" value={1} />
                      <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputitem flex  items-center gap-4">
                      <input type="checkbox" name="catebtn" id="2" value={2} />
                      <label htmlFor="2">Clothes</label>
                    </div>
                  </ul>

                  <h4 className="font-bold text-lg mt-3">Price Filter</h4>
                  <div className="range-container flex justify-start gap-2 items-center mt-3">
                    <span>0</span>
                    <input
                      type="range"
                      name=""
                      id=""
                      min={0}
                      max={10000}
                      onChange={(e)=>setValue(e.target.value)}
                      step={200}
                    />
                    <span>{value}</span>
                  </div>
                  <div className="sort-container mt-3">
                    <h4 className="font-bold text-lg mt-3"> Filter</h4>
                    <div className="flex items-center gap-2 mb-2 mt-3">
                      <input type="radio" name="btn1" id="btn1"  onChange={()=>setSort("asc")}/>
                      <label htmlFor="btn1">Ascending To Descending</label>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <input type="radio" name="btn1" id="btn2" onChange={()=>setSort("des")} />
                      <label htmlFor="btn2">Descending To Ascending </label>
                    </div>
                  </div>


                   
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                New Arrivals
              </h1>

              <div className="flex items-center m-auto">
                <Menu as="div" className="relative inline-block text-left">
                 

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                       
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
     
                    <div className="inputitem flex  items-center gap-4">
                      <input type="checkbox" name="catebtn" id="1" value={1} />
                      <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputitem flex  items-center gap-4">
                      <input type="checkbox" name="catebtn" id="2" value={2} />
                      <label htmlFor="2">Clothes</label>
                    </div>
                  </ul>
                  <h4 className="font-bold text-lg mt-3">Price Filter</h4>
                  <div className="range-container flex justify-start gap-2 items-center mt-3">
                    <span>0</span>
                    <input
                      type="range"
                      name=""
                      id=""
                      min={0}
                      max={10000}
                      onChange={(e)=>setValue(e.target.value)}
                      value={value}
                      step={200}
                    />
                    <span>{value}</span>
                  </div>
                  <div className="sort-container mt-3">
                    <h4 className="font-bold text-lg mt-3"> Filter</h4>
                    <div className="flex items-center gap-2 mb-2 mt-3">
                      <input type="radio" name="btn1" id="btn1" onChange={()=>setSort("asc")} />
                      <label htmlFor="btn1">Ascending To Descending</label>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <input type="radio" name="btn1" id="btn2"  onChange={()=>setSort("des")} />
                      <label htmlFor="btn2">Descending To Ascending </label>
                    </div>
                  </div>

                </form>

                {/* Product grid */}
               

                <div className="lg:col-span-3">
                <div className="  w-full  ">
                  <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZhc2hpb258ZW58MHwwfDB8fHww" className="max-h-60 w-full object-fill" alt="" />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" onClick={()=> sendId(2)}>
          {products.map((product) => (
            <div key={product.id} className="group relative ">
              <div className="aspect-h-1  aspect-w-1 z-0 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="image-one  h-full z-0 w-full object-cover object-center lg:h-full lg:w-full"
                />
                
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              
            </div>
          ))}
        </div>
                  </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Product;
