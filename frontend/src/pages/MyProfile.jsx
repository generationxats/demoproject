import React from 'react';
import Avatar from '@mui/material/Avatar';
import { FaRegNewspaper } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import {Link} from 'react-router-dom';

const MyProfile = () => {
  return (
   <>


     {/* ADVERTISEMENT SPACE STARTS  */}
     <span className='fixed w-[20%] h-full hidden md:block font-bold text-center'>
    Advertisement  space
   </span>
   <span className='fixed w-[20%] h-full right-0 hidden md:block font-bold text-center'>
    Advertisement  space
   </span>
    {/* ADVERTISEMENT SPACE ENDS  */}
   
   
   <div className='w-[95%] md:w-[50%] m-auto mt-5 p-2 shadow-xl shadow-gray-500 rounded-xl cursor-pointer'>
    
   <div className='flex justify-center'> 
    <Avatar src='https://i.pinimg.com/736x/09/c7/c2/09c7c243c3523ec135101c7489b84971.jpg' sx={{width:80,height:80}} />
   </div>

   <Link to='/editprofile' className='flex justify-center py-1'>
    <button className='bg-green-500 hover:bg-green-600 px-2 rounded-lg text-white'>Edit Profile</button>
   </Link>

   <div className='flex justify-center gap-8 my-2 py-2'>
   <span className='grid'>
   <span className='text-center'>5</span>
   <span className='font-bold'>Posts</span>
   </span>

   <span className='grid'>
   <span className='text-center'>80</span>
   <span className='font-bold'>Followers</span>
   </span>

   <span className='grid'>
   <span className='text-center'>17</span>
   <span className='font-bold'>Following</span>
   </span>
   </div>

   <div className='flex justify-center'>
    <span className='border px-4 py-2 rounded-lg'>
      tonystark
    </span>
   </div>


   <div className='flex justify-center items-center gap-1 my-2'>
    <span className='border p-2 rounded-lg'>+91</span>
    <span className='border px-4 py-2 rounded-lg'>
      999988888
    </span>
   </div>


   <div className='grid px-1 border'>
    <span className='font-bold text-center py-1'>About</span>
    <span className='p-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum quibusdam debitis quo veritatis fugiat et expedita iusto impedit porro. Ullam, perspiciatis omnis? Ex, deserunt.</span>
   </div>


   <Link to='/myadds' className=' bg-teal-500 hover:bg-teal-400 w-[150px] text-center flex justify-center m-auto p-2 rounded-lg text-white mt-2'>
   <span className='flex items-center gap-2'>
    <span><FaRegNewspaper/></span>
    <span>My-adds</span>
   </span>
   </Link>


   <button className='bg-rose-600 hover:bg-rose-500 text-white rounded-lg px-4 py-1 my-4 m-auto flex items-center gap-1'>
    <span><CiLogout/></span>
    <span>Logout</span>
   </button>

   </div>
   
   
   
   </>
  )
}

export default MyProfile