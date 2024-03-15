import React, { useState } from 'react';
import {Link} from 'react-router-dom';



const Signup = () => {



  return (
    
  <>

   

      <div className='flex justify-center gap-5 mt-24 md:mt-16'>
     <div className='hidden md:block rounded-lg w-[30%] h-[400px] overflow-hidden'>
     <img className='rounded-lg'  src='https://images.unsplash.com/photo-1602523598510-c862c2a35382?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
     </div>
      <div className='shadow-xl shadow-gray-400 rounded-2xl grid w-[85%] md:w-[40%] p-2'>
      <span className=' m-auto text-rose-700 font-bold text-xl'>
       demoProject
     </span>
     <h1 className='text-center p-4 text-3xl'>Signup</h1>
     <input  className='border border-gray-200 p-2 m-2 rounded-xl' type='text' 
     placeholder='Username' />
     <input  className='border border-gray-200 p-2 m-2 rounded-xl' type='number' 
     placeholder='+91  Number' />
     <input className='border border-gray-200 p-2 m-2 rounded-xl' type='password' 
     placeholder='paasword' />
      <button  className='bg-green-500 hover:bg-green-600 p-1 text-white w-20 rounded-lg m-auto mt-2'>Signup</button>
      <p className='text-center p-4'>Already have an account ? <Link className='text-sky-500 underline' to='/login'>Login</Link></p>
      </div>
      </div>
  

  </>

  )
}

export default Signup
