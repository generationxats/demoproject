import React from 'react';


const CreateNewPost = () => {
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


   <div className='shadow-lg shadow-gray-500 w-full md:w-[50%] m-auto px-2 py-12 md:py-0 overflow-auto'>
    
    <h1 className='text-center p-6 font-bold text-2xl'>Create New Post</h1>

    <div className='m-auto flex items-center justify-center md:my-4'>
    <input className='border p-2 rounded-lg w-[95%]' type='text' placeholder='title...' />
    </div>


    <div className='w-[95%] h-[340px] md:h-[400px] my-2 m-auto overflow-hidden rounded-lg'>
     <img src='https://cdn-icons-png.freepik.com/512/7729/7729432.png' />
    </div>


    <div className='grid justify-center my-1'>
    <button className='bg-white hover:bg-gray-100 text-black rounded-lg m-auto flex justify-center px-3 py-1 border'>
        Upload image
    </button>
    <input className='p-2 hidden' type='file' />
    </div>


    <div className='flex justify-center'>
    <select className='p-1 rounded-lg my-1 border'>
            <option>Select Categorie</option>
            <option>Property</option>
            <option>Vehicle</option>
            <option>Electronic</option>
            <option>Accesories</option>
            <option>Outfits</option>
            <option>Other</option>
        </select>
    </div>


    <div className='flex justify-center'>
    <select className='p-1 rounded-lg my-1 border'>
            <option>Select Type</option>
            <option>Single Room</option>
            <option>1 Rk Studio Apartment</option>
            <option>1 BHK Apartment</option>
            <option>2 BHK Apartment</option>
            <option>3 BHK Apartment</option>
            <option>4 BHK Apartment</option>
            <option>5 BHK Apartment</option>
            <option>6 BHK Apartment</option>
            <option>PentHouse</option>
            <option>Bunglow</option>
            <option>Villa</option>
            <option>FarmHouse</option>
            <option>Halls</option>
            <option>Shops</option>
            <option>Offices</option>
            <option>Independent House</option>
            <option>Independent Building</option>
            <option>Commercial Building</option>
            <option>Guest House</option>
            <option>Occational Grounds</option>
            <option>Banquet Halls</option>
            <option>Vehicle</option>
            <option>Electronic</option>
            <option>Outfits</option>
            <option>Accesories</option>
            <option>Other</option>
        </select>
    </div>


    <div className='m-auto flex items-center justify-center my-2 md:my-4'>
    <input className='border p-2 rounded-lg w-[95%]' type='text' placeholder='enter your city' />
    </div>


    <div className='m-auto flex items-center justify-center md:my-4'>
    <input className='border p-2 rounded-lg w-[95%]' type='number' placeholder='enter rent price' />
    </div>


    <div className='m-auto flex items-center justify-center my-2'>
    <textarea className='p-2 rounded-lg w-[95%] border' type='text' placeholder='add description....' />
    </div>


    <div className='m-auto flex items-center justify-center my-2'>
    <textarea className='p-2 rounded-lg w-[95%] border' type='text' placeholder='enter local address / street / locality / landmark ...etc ' />
    </div>

    <button className='bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-1 flex m-auto my-5'>Submit</button>
 
   </div>


   </>
  )
}

export default CreateNewPost
