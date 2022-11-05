import React from 'react'
import Link from "next/link"
import Image from 'next/image'
require('dotenv').config()
console.log(process.env)

const Treks = (props) => {
  return (
    <>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      
      
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
      {
        props.products.data.map((item) => {
          return(
            <>
            <Link
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <Image
             src={item.attributes.image.data.attributes.formats.small.url}
              className="object-cover w-full h-48"
              alt="image"
              height='1000'
              width='1000'
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                {item.attributes.title}
                </h6>
                <h6 className="mb-2 font-semibold leading-5">
                {`₹ ${item.attributes.price}`}
                </h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
            </div>
          </div>
        </Link>
            </>
          )
        })
      }
        
        
        
       
        </div>
      </div>
    </>
    
  )
}

export async function getServerSideProps(context) {
  let headers = { Authorization: `Bearer ${process.env.API_URL}` }
    
    let a = await fetch(process.env.API_URL + "/api/products?populate=*", { headers: headers })
    let products = await a.json();
    console.log(products)
    return {
      props: {
        products: products
      },
    }
  }

export default Treks