import React from 'react'
import "./Productcart.scss"
import { useParams } from 'react-router-dom'
const Productcart = () => {
  const params =  useParams();
    console.log(params)
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
    <div>
     <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="flex justify-between items-center">
      <h2 className="text-[20px] md:text-2xl m-0 p-0 font-bold tracking-tight text-gray-900">Feature Product</h2>
      <p className='md:max-w-md md:text-[14px] text-slate-600 w-1/2 text-xs px-1 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, numquam! Commodi laborum dolores tempore. Maiores cupiditate neque rerum assumenda saepe!</p>
      </div>

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
    </div>
  )
}

export default Productcart
