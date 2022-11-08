import React from 'react'
import Link from "next/link"
import Image from 'next/image'
// require('dotenv').config()

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
             src={`https://salty-savannah-84149.herokuapp.com${item.attributes.image.data.attributes.formats.small.url}`}
              
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

// 

export async function getServerSideProps(context) {
  let headers = { Authorization: "Bearer faadf7fdbd16a1a0be4c165b34e0e16cb6b9ca7709e0c47f1e02037e7ca3f7a9de577d901d767724cba93941ce3b5899a19885c32bdab1cc1cd42555e1b70c295de4b727e35fd3c08a5e2b3440208599fb31426ded45358d5689c5ccd65a005253d3321717bdbfed3f8b4b7121c3c4e5befb940dba9f4b843fa7a60fa6884acd" }
    
    let a = await fetch("https://salty-savannah-84149.herokuapp.com/api/products?populate=*", { headers: headers })
    let products = await a.json();
    console.log(products)
    return {
      props: {
        products: products
      },
    }
  }



export default Treks