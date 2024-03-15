import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import {Link} from 'react-router-dom';


const OtherUserProfile = () => {

  const [fav,setFav] = useState(false);

  
 const handlefav = () => {
  setFav(!fav)
 }

  return (
    <>
    
    <span className='flex justify-center mt-2'>
    <Avatar src='https://i.guim.co.uk/img/media/a4eea3f7b5f6df1b96099e5e923ad1c8ae784aa0/128_0_1922_1153/master/1922.jpg?width=465&dpr=1&s=none'
     sx={{width:80,height:80}}
      />
    </span>


   <span className='grid w-[20%] md:w-[8%] py-2 m-auto'>
    <span className='text-center pb-1'>xyz</span>
    <button className='bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-lg'>Follow</button>
   </span>


   <div className='flex justify-center gap-8'>
   <span className='grid'>
   <span className='text-center'>5</span>
   <span className='font-bold'>Posts</span>
   </span>

   <span className='grid'>
   <span className='text-center'>100</span>
   <span className='font-bold'>Followers</span>
   </span>

   <span className='grid'>
   <span className='text-center'>26</span>
   <span className='font-bold'>Following</span>
   </span>
   </div>


  <p className='grid px-1 py-1 md:w-[50%] m-auto my-2'> 
    <span className='font-bold text-center'>About</span>
    <span className='text-gray-400 px-1 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, magnam tempore sapiente aperiam, nulla architecto saepe explicabo veniam voluptatem necessitatibus temporibus a quae ipsa molestiae!</span>
  </p>


   {/* ADD POSTED BY USERS STARTS HERE */}
   <div className=' w-full mt-2 px-2 flex flex-wrap justify-center md:gap-3'>


        <div  className='shadow-xl shadow-gray-500 w-full md:w-[30%] h-[430px] mt-8 md:mt-2  hover:shadow-xl hover:shadow-gray-700'>
          <Link to='/fulldetail' >
            <div className='overflow-hidden w-full h-[300px]'>
            <img src='https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
            <p className='ml-2 text-sm'>apartment for rent in bangalore</p>
            <p className='ml-2 text-sm'><span className='font-bold text-black mr-1'>Rent:</span>15,000</p>
            <p className='flex items-center ml-1 text-sm'>
                <span className='text-red-700'><IoLocationSharp/></span>
                <span>Bangalore</span>
            </p>
            <p className='text-sm ml-2'>Behind kingfisher tower royal enclave , bangalore</p>
            </Link>
            <p className='w-[55%] m-auto flex items-center gap-2 justify-center py-1 rounded-lg mt-2 border-2 ' onClick={handlefav}>
            {
                fav ? 
                <>
                <span className='text-red-600'><FaHeart/></span>
                <span className='text-red-600'>Remove from Favourites</span>
                </>
                :
                <>
                <span><FaHeart/></span>
                <span >Add to Favourites</span>
                </>
              }
            </p>
        </div>

     </div>
   {/* ADD POSTED BY USERS ENDS HERE */}

    
    </>
  )
}

export default OtherUserProfile