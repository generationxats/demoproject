import React from 'react';
import Avatar from '@mui/material/Avatar';
import { IoMdSend } from "react-icons/io";
import {Link} from 'react-router-dom';


const UserMessages = () => {
  return (
    <>
    
   <span className='flex justify-center mt-2'>
    <Link to='/otheruserprofile'>
        <Avatar src='https://i.guim.co.uk/img/media/a4eea3f7b5f6df1b96099e5e923ad1c8ae784aa0/128_0_1922_1153/master/1922.jpg?width=465&dpr=1&s=none' sx={{width:60,height:60}} />
    </Link>    
   </span>
    
    
   <Link to='/otheruserprofile' className=' w-[105px] grid m-auto text-center'>
    <span className='text-center '>xyz</span>
    <span className='bg-green-600 hover:bg-green-500 text-white px-2  rounded-lg'>view profile</span>
   </Link>
  
  <p className='bg-blue-500 text-white w-[60%] md:w-[20%] p-2 rounded-md fixed bottom-[16%] left-[3%]'>
  Hi ! I am abc
  <br/>
   I am interested in you add.
  <br/>
    please contact me at 
  <br/>
  <span className='font-bold'>99999000</span>
  </p>


   <div className='fixed w-full bottom-12 md:bottom-1 flex items-center px-2 md:px-0 py-3 gap-1 justify-center'>
    <input className='p-2 w-[400px] rounded-lg border' type='text' placeholder='type a message...' />
    <span className='p-2 bg-green-600 hover:bg-green-500 text-white rounded-lg'><IoMdSend/></span>
   </div>

    </>
  )
}

export default UserMessages