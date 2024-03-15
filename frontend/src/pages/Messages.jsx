import React from 'react';
import Avatar from '@mui/material/Avatar';
import { MdDelete } from "react-icons/md";
import {Link} from 'react-router-dom';


const Messages = () => {
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
   
   <h1 className='text-center font-bold text-xl py-5'>Messages</h1>

   <div className='bg-gray-50 hover:bg-gray-100 font-bold flex w-[50%] md:w-[15%] m-auto justify-center gap-3 items-center py-2 shadow-lg shadow-gray-500 cursor-pointer'>
    <span>Select Multiple</span>
    <span><input type='checkbox' /></span>
   </div>


   {/* THIS IS MESSAGE BOX STARTS  */}
   <div className='shadow-lg shadow-gray-500 md:w-[50%] h-[500px] md:h-[380px]  mt-6 m-auto p-2 overflow-auto'>
    
   <Link to='/usermessages' className='bg-gray-100 hover:bg-gray-50 flex items-center justify-between gap-4 py-2 px-2 rounded-lg my-2'>
   <span className='flex items-center gap-2'>
    <Avatar src='https://i.guim.co.uk/img/media/a4eea3f7b5f6df1b96099e5e923ad1c8ae784aa0/128_0_1922_1153/master/1922.jpg?width=465&dpr=1&s=none' sx={{width:50,height:50}} />
    <span className='font-bold'>xyz</span>
    </span>
   <span className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium totam et temporibus delectus autem?.</span>
   <span className='text-red-700 text-3xl'><MdDelete/></span>
   </Link>

   <div className='bg-gray-100 hover:bg-gray-50 flex items-center justify-between gap-4 py-2 px-2 rounded-lg my-2'>
   <span className='flex items-center gap-2'>
    <Avatar src='https://preview.redd.it/endure-this-has-to-be-my-favorite-pic-of-the-dark-knight-v0-r05ztg2zp6q81.jpg?width=1080&crop=smart&auto=webp&s=27bf78a97a144d7b89ce9edcb06487adc46837ff' sx={{width:50,height:50}} />
    <span className='font-bold'>bruce wayne</span>
    </span>
   <span className='text-sm'>Lorem ipsum dolor, sit amet hhhjhj huuy.</span>
   <span className='text-red-700 text-3xl'><MdDelete/></span>
   </div>

   <div className='bg-gray-100 hover:bg-gray-50 flex items-center justify-between gap-4 py-2 px-2 rounded-lg my-2'>
   <span className='flex items-center gap-2'>
    <Avatar src='https://m.photos.timesofindia.com/thumb.cms?msid=4833210&width=500&resizemode=4' sx={{width:50,height:50}} />
    <span className='font-bold'>baba</span>
    </span>
   <span className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, et eligendi rem repudiandae veniam, molestias pariatur laudantium natus cumque nisi officia blanditiis aspernatur!</span>
   <span className='text-red-700 text-3xl'><MdDelete/></span>
   </div>

   <div className='bg-gray-100 hover:bg-gray-50 flex items-center justify-between gap-4 py-2 px-2 rounded-lg my-2'>
   <span className='flex items-center gap-2'>
    <Avatar src='https://www.forbesindia.com/media/images/2023/Nov/img_221935_mohammedshami.jpg' sx={{width:50,height:50}} />
    <span className='font-bold'>lala</span>
    </span>
   <span className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt cum quos iusto ab libero!</span>
   <span className='text-red-700 text-3xl'><MdDelete/></span>
   </div>

   <div className='bg-gray-100 hover:bg-gray-50 flex items-center justify-between gap-4 py-2 px-2 rounded-lg my-2'>
   <span className='flex items-center gap-2'>
    <Avatar src='https://imgeng.jagran.com/images/2021/sep/Salma1631091805094.jpg' sx={{width:50,height:50}} />
    <span className='font-bold'>bhoi</span>
    </span>
   <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime libero, accusantium voluptatem at similique quas quia?</span>
   <span className='text-red-700 text-3xl'><MdDelete/></span>
   </div>

   <div className='bg-gray-100 hover:bg-gray-50 flex items-center justify-between gap-4 py-2 px-2 rounded-lg my-2'>
   <span className='flex items-center gap-2'>
    <Avatar src='https://i.pinimg.com/originals/ab/29/11/ab2911f7a88a9d75966bb5c318e438b3.jpg' sx={{width:50,height:50}} />
    <span className='font-bold'>rocky bhai</span>
    </span>
   <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquid quam deleniti aperiam cumque tenetur iste aut suscipit cupiditate rerum, delectus minima?</span>
   <span className='text-red-700 text-3xl'><MdDelete/></span>
   </div>

   <div className='bg-gray-100 hover:bg-gray-50 flex items-center justify-between gap-4 py-2 px-2 rounded-lg my-2'>
   <span className='flex items-center gap-2'>
    <Avatar src='https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg' sx={{width:50,height:50}} />
    <span className='font-bold'>ronaldo</span>
    </span>
   <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem suscipit laboriosam sit quam accusantium?</span>
   <span className='text-red-700 text-3xl'><MdDelete/></span>
   </div>

   <div className='bg-gray-100 hover:bg-gray-50 flex items-center justify-between gap-4 py-2 px-2 rounded-lg my-2'>
   <span className='flex items-center gap-2'>
    <Avatar src='https://i.pinimg.com/736x/af/3b/f4/af3bf4656be3b95a31bc9b8bb1cd6526.jpg' sx={{width:50,height:50}} />
    <span className='font-bold'>cody rhodes</span>
    </span>
   <span className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos ea soluta neque laborum amet quasi praesentium rerum! Modi mollitia nulla maiores.</span>
   <span className='text-red-700 text-3xl'><MdDelete/></span>
   </div>


   </div>
   {/* THIS IS MESSAGE BOX ENDS  */}
   


   </>
  )
}

export default Messages