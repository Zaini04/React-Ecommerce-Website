import React from 'react'

function Register({openLogin}) {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>SignUp</h2>
        <form >
            <div className='mb-4'>
                <label className='block text-gray-700' htmlFor="">Name</label>
                <input className='w-full px-3 py-2 border ' placeholder='Enter Name' type="text" />
            </div>
            
            <div className='mb-4'>
                <label className='block text-gray-700' htmlFor="">Email</label>
                <input className='w-full px-3 py-2 border ' placeholder='Enter Email' type="email" />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700' htmlFor="">Password</label>
                <input className='w-full px-3 py-2 border ' placeholder='Enter Password' type="password" />
            </div>
           
            <div className='mb-4'>
                <button type='submit' className='w-full bg-red-600 text-white py-2 cursor-pointer'>
                    SignUp
                </button>
            </div>

            
        </form>
        <div className='text-center'>
            <span className='text-gray-700'>Already have an account</span>
            <button className='text-red-800 ml-1 cursor-pointer' onClick={openLogin}>Login</button>
        </div>
    </div>
  )
}

export default Register