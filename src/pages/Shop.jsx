import React from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'


function Shop() {
    const products = useSelector(state=>state.product)
  return (
   <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl mb-6 font-bold text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {
                products.products.map(((product,index)=>(
                    <ProductCard product={product} key={index}/>
                )))
            }
        </div>
      </div>
  )
}

export default Shop