import React from 'react'
import { InfoItems } from '../assets/Info'

const InfoSection = () => {
    
  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {InfoItems.map((item,index)=>(
                <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer '>
                    {item.icon}
                    <h3 className='text-xl font-semibold mt-4'>{item.title}</h3>
                    <p className='text-gray-600 mt-2'>{item.description}</p>
                </div>
            ))}

        </div>
        
    </div>
  )
}

export default InfoSection