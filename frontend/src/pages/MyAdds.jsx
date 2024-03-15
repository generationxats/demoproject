import React from 'react';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";


const MyAdds = () => {
  return (
   <>
   
   <Link to='/myprofile' className='flex justify-center pt-3 pb-1'>
    <Avatar src='https://i.pinimg.com/736x/09/c7/c2/09c7c243c3523ec135101c7489b84971.jpg' sx={{width:70,height:70}} />
   </Link>
   
   <Link to='/myprofile'>
    <button className='bg-green-500 hover:bg-green-600 text-white rounded-lg px-3  flex m-auto'>
     view Profile
    </button>
     </Link>


   <h1 className='text-center py-4 text-3xl font-bold'>My Adds</h1>

     
     <div className=' w-full px-2 flex flex-wrap justify-center md:gap-3'>
  
               {/* CARD OF THE DATA STARTS HERE */}
               <Link to='/fulldetail' className='shadow-xl shadow-gray-500 w-full md:w-[30%] h-[430px] mt-8 md:mt-2 p-1 hover:shadow-xl hover:shadow-gray-700'>
            <div className='overflow-hidden w-full h-[300px]'>
            <img className='m-auto' src='https://housing-images.n7net.in/354cef8f/40d6f7643c39e7cb2f83b6be68c27645/v0/medium.jpg' />
            </div>
            <div className='flex items-center justify-between ml-2 mt-1'>
             <span className='font-bold'>views:<span className='font-normal ml-1'>410</span></span>
             <span className='font-bold flex items-center text-red-600'><FaHeart/><span className='font-normal ml-1 text-black'>20</span></span>
             <Link to='/premiumservices' className='bg-yellow-400 hover:bg-yellow-500 rounded-lg px-1'>Feature</Link>
             <span className='text-xl flex items-center gap-2'>
                <span className='text-green-600'><RiEdit2Fill/></span>
                <span className='text-red-600'><MdDelete/></span>
                </span>
            </div>
            <p className='text-sm ml-2'>shop availabe on rent</p>
            <p className='text-sm ml-2'><span className='font-bold text-black mr-2'>Rent:</span>25000</p>
            <p className='flex items-center ml-1 text-sm'>
                <span className='text-red-700'><IoLocationSharp/></span>
                <span>Bhopal</span>
            </p>
            <p className='text-sm ml-2'>rang mahal block 3 , bhopal </p>
        </Link>
        {/* CARD OF THE DATA ENDS HERE */}


     </div>
   
   </>
  )
}

export default MyAdds