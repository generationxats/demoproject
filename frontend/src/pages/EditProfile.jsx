import React from 'react';
import Avatar from '@mui/material/Avatar';




const EditProfile = () => {
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
    
    <div className='shadow-xl shadow-gray-500 w-[96%] md:w-[40%] m-auto py-1 md:mt-4 mt-12'>
        
     <span className='flex justify-center py-4'>
        <Avatar src='https://i.pinimg.com/736x/09/c7/c2/09c7c243c3523ec135101c7489b84971.jpg' sx={{width:80,height:80}} />
     </span>

     <div className='grid px-4 py-2 md:w-[90%] m-auto'>
     <label className='py-1'>UserName</label>
     <input className='p-2 rounded-lg border' type='text'  placeholder='username...' />
     </div>


     
     <div className='grid px-4 py-2 md:w-[90%]  m-auto'>
     <label className='py-1'>Number</label>
     <input className='p-2 rounded-lg border' type='number'  placeholder='number...' />
     </div>


      
     <div className='grid px-4 py-2 md:w-[90%] m-auto'>
     <label className='py-1'>Bio</label>
     <textarea className='p-2 rounded-lg border'  placeholder='bio...' />
     </div>

     <button className='bg-green-600 hover:bg-green-500 text-white rounded-lg px-4 py-1 my-6 m-auto flex'>Update</button>


    </div>
    
    
    </>
  )
}

export default EditProfile