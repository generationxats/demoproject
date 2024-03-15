import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import {Link} from 'react-router-dom';


const MyFavourite = () => {
  return (
   <>

   <h1 className='text-center text-3xl font-bold py-5'>My Favourites</h1>

<div className=' w-full px-2 flex flex-wrap justify-center md:gap-3'>
        {/* CARD OF THE DATA STARTS HERE */}
        <Link to='/fulldetail' className='shadow-xl shadow-gray-500 w-full md:w-[30%] h-[430px] mt-8 md:mt-2 hover:shadow-xl hover:shadow-gray-700'>
            <div className='overflow-hidden w-full h-[300px]'>
            <img src='https://blog.newhomesource.com/wp-content/uploads/2019/09/farmhouse.jpg.webp' />
            </div>
            <p className='text-sm ml-2'>this is title.....</p>
            <p className='text-sm ml-2'><span className='font-bold text-black mr-2'>Rent:</span>15,000</p>
            <p className='flex items-center text-sm ml-1'>
                <span className='text-red-700'><IoLocationSharp/></span>
                <span>Bangalore</span>
            </p>
            <p className='text-sm ml-2'>kingfisher tower block c , bangalore</p>
            <p className='w-[55%] m-auto bg-red-600 hover:bg-red-500 text-white py-1 rounded-lg mt-2 text-center cursor-pointer'>
              <span>Remove From Favourites</span>
            </p>
        </Link>
        {/* CARD OF THE DATA ENDS HERE */}
     </div>

   </>
  )
}

export default MyFavourite