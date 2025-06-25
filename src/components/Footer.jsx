import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 pl-4 md:pl-0 px4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='mt-4'>
          <h3 className='text-xl font-bold'>E-Shop</h3>
          <p className='mt-4'>Your one step for all your needs.Shop with us ans explore the best experince with us.</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h3 className='text-xl font-bold'>Quik Links</h3>
          <ul className='mt-4 space-y-2'>
            <li className='flex flex-row md:flex-col gap-x-4 gap-y-2' >
              <Link className='hover:underline hover:text-gray-500' to='/'>Home</Link>
              <Link className='hover:underline hover:text-gray-500' to='/shop'>Shop</Link>
              <Link className='hover:underline hover:text-gray-500' to='/aboutus'>About</Link>
              <Link className='hover:underline hover:text-gray-500' to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-xl font-bold'>Follow US</h3>
          <div className='flex space-x-4 mt-4 text-xl'>
            <a className='hover:text-gray-400' href="#"><FaFacebook/></a>
            <a className='hover:text-gray-400' href="#"><FaTwitter/></a>
            <a className='hover:text-gray-400' href="#"><FaGithub/></a>
            <a className='hover:text-gray-400' href="#"><FaLinkedin/></a>

          </div>
          <form  className='flex justify-center items-center mt-8'>
            <input className='w-full rounded-l-lg p-2 bg-gray-800 border border-gray-600' type="email" placeholder='You Email'  />
            <button type='#' className='py-2 px-4 bg-red-600 text-white border border-gray-300 rounded-r-lg cursor-pointer hover:text-gray-500'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-4  '>
        <div className='container mx-auto  flex flex-col md:flex-row justify-between items-center ' >
          <p>&copy; 2025 E-shop all rights reserved</p>
          <div className='flex flex-col md:flex-row  space-x-4 mt-4 md:mt-0'>
            <a href="#" className='hover:underline hover:text-gray-500'>Privacy Policy</a>
            <a href="#" className='hover:underline hover:text-gray-500'>Terms & Conditions</a>
        </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer