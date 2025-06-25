import React from 'react'
import { categories } from '../assets/Info'

const Categories = () => {
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto'>
        {
            categories.map((category,index)=>(
                <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    <img src={category.url} alt="" className='w-full h-full rounded-lg shadow-md ' />
                    <div className='absolute top-20 left-10'>
                        <p className='text-xl font-bold'>{category.title}</p>
                        <p className='text-gray-600 font-semibold hover:underline'>View All</p>
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default Categories