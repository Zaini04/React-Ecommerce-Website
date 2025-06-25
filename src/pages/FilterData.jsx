import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import NoProductFind from '../assets/Images/No_Product_Found.png'

function FilterData() {
    const filteredData = useSelector(state => state.product.filteredData)
  return (
  <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
    {filteredData.length > 0 ? 
    <>
      <h2 className="text-2xl mb-6 font-bold text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {
                filteredData.map(((product,index)=>(
                    <ProductCard product={product} key={index}/>
                )))
            }
        </div>
    </>
    : 
    <div className='flex justify-center '>
        <img src={NoProductFind} alt="" className='h-72 w-72 bg-transparent' />
    </div>}
      
      </div>  )
}

export default FilterData