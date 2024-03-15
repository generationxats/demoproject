import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
import {Link} from 'react-router-dom';


const PremiumDetails = () => {
  return (
   <>
   
   <h1 className='text-2xl font-semibold text-yellow-500 text-center my-4'>Premium Services</h1>

   <div className='w-[95%] md:w-[30%] m-auto p-1 grid justify-center mt-12 border-2'>
    <span className='text-2xl text-gray-400 mt-2'>No Featured posts yet !</span>
    <Link to='/myadds' className='flex justify-center text-4xl mt-24 mb-4 text-yellow-400 hover:text-yellow-500'><IoIosAddCircle/></Link>
   </div>
   
   </>
  )
}

export default PremiumDetails