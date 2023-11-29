import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";
import Productcart from "../components/Productcart/Productcart";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
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

  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //   imageSrcs :'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //   imageSrcs :'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //   imageSrcs :'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
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
                      step={200}
                    />
                    <span>10000</span>
                  </div>
                  <div className="sort-container mt-3">
                    <h4 className="font-bold text-lg mt-3"> Filter</h4>
                    <div className="flex items-center gap-2 mb-2 mt-3">
                      <input type="radio" name="btn1" id="btn1" />
                      <label htmlFor="btn1">Ascending To Descending</label>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <input type="radio" name="btn1" id="btn2" />
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
                    {/* {subCategories.map((category) => (
    <li key={category.name}>
      <a href={category.href}>{category.name}</a>
    </li>
  ))} */}
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
                      step={200}
                    />
                    <span>10000</span>
                  </div>
                  <div className="sort-container mt-3">
                    <h4 className="font-bold text-lg mt-3"> Filter</h4>
                    <div className="flex items-center gap-2 mb-2 mt-3">
                      <input type="radio" name="btn1" id="btn1" />
                      <label htmlFor="btn1">Ascending To Descending</label>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <input type="radio" name="btn1" id="btn2" />
                      <label htmlFor="btn2">Descending To Ascending </label>
                    </div>
                  </div>

                  {/* {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))} */}
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3">
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative ">
              <div className="aspect-h-1  aspect-w-1 z-0 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="image-one  h-full z-0 w-full object-cover object-center lg:h-full lg:w-full"
                />
                 {/* <img
                  src={product.imageSrcs}
                  alt={product.imageAlt}
                  className="image-one h-full z-0 w-full object-cover object-center lg:h-full lg:w-full"
                /> */}
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
