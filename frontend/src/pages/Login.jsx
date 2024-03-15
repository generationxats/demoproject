import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const Login = () => {


  return (
    
  <>
  
   <div className='flex justify-center mt-32 md:mt-16 gap-5'>
   <div className='hidden rounded-lg md:block w-[30%] h-[400px] overflow-hidden'>
   <img className='rounded-lg' src='https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D' />
   </div>
    <div className='shadow-xl shadow-gray-400 rounded-2xl grid w-[85%] md:w-[40%] p-2'>
    <span className=' m-auto font-bold text-xl text-rose-600'>
    demoProject
    </span>
   <h1 className='text-center p-4 text-3xl'>Login</h1>
    <input className='border border-gray-200 p-2 m-2 rounded-xl' type='number'  
    placeholder='91+ number' />

   <input className='border border-gray-200 p-2 m-2 rounded-xl' type='password' 
   placeholder='paasword' />
   
   <button  className='bg-green-500 hover:bg-green-600 p-1 text-white w-20 rounded-lg m-auto mt-2'>Login</button>
   <p className='m-auto'>or</p>
 
   <p className='text-center p-2'>Don't have an account ? <Link className='text-sky-500 underline' to='/signup'>Signup</Link></p>
   </div>
   </div>

  
  </>

  )
}

export default Login