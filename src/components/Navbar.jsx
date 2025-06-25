import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Model from './Model'
import Login from './Login'
import Register from './Register'
import { setSearchTerm } from '../redux/ProductSlice'

const Navbar = () => {
    const products = useSelector(state => state.cart.products)
    const [search,setSearch] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSearch = (e)=>{
        e.preventDefault()
        console.log(search)
        dispatch(setSearchTerm(search))
        navigate('/filter-data')

    }

    const openSignUp= ()=>{
        setIsLogin(false)
        setIsModelOpen(true)
    }
      const openLogin= ()=>{
        setIsLogin(true)
        setIsModelOpen(true)
    }

    const [isModelOpen,setIsModelOpen] =useState(false)
    const [isLogin,setIsLogin] = useState(true)

  return (
    <nav className='bg-white shadow-md'>
        <div className='container mx-auto px-4 py-4 md:px-16 lg:px-24 flex justify-between items-center '>
            <div className='font-bold text-lg'>
                <Link to="/" >E-shop</Link>
            </div>
            <div className='relative flex-1 mx-4'>
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder='Search any Products...' className='border py-2 px-4 w-full' 
                    onChange={(e)=> setSearch(e.target.value)}
                    />
                    <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                </form>
            </div>
            <div className='flex items-center space-x-4 '>
                <Link to='/cart' className='relative' >
                <FaShoppingCart className='text-lg hover:text-blue-500  transition' />
                {products.length > 0 && (
                <span className='absolute -top-3 text-xs w-3 left-1 px-3 py-1 bg-red-600 rounded-full flex items-center justify-center text-white'>
                    {products.length > 9 ? "9+" : products.length }
                    </span>    
                
                )
            }
                </Link>
                <button className='hidden md:block cursor-pointer' 
                onClick={()=>setIsModelOpen(true)}
                >
                    Login | Register
                </button>
                <button className='block md:hidden cursor-pointer'>
                    <FaUser></FaUser>
                </button>
            </div>
        </div>
        <div className='flex justify-center items-center space-x-10 py-4 font-bold text-md'>
            <Link to='/' className='hover:underline hover:text-blue-900 hover:transition ease-in-out'>Home</Link>
            <Link to='/shop' className='hover:underline hover:text-blue-900 hover:transition ease-in-out'>Shop</Link>
            <Link to='/contact' className='hover:underline hover:text-blue-900 hover:transition ease-in-out'>Contact</Link>
            <Link to='/aboutus' className='hover:underline hover:text-blue-900 hover:transition ease-in-out'>About</Link>

        </div>
        <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
        </Model>
    </nav>
  )
}

export default Navbar