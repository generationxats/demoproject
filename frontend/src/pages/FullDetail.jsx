import React from 'react';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';

const FullDetail = () => {
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




    <div className='bg-gray-50 md:w-[60%] m-auto'>
    {/* FULL DETAILS STARTS HERE */}
    <div>
        <img src='https://blog.newhomesource.com/wp-content/uploads/2019/09/farmhouse.jpg.webp' />
    </div>

    <div className=' px-3 py-1 mt-4'><span className='font-bold mr-2'>Title:</span>Big farmhouse availabe for rent</div>

    
    <div className=' px-3 py-1'><span className='font-bold mr-2'>Categorie:</span>Property</div>

    <div className=' px-3 py-1'><span className='font-bold mr-2'>Type:</span>Farmhouse</div>

    <div className=' px-3 py-1'><span className='font-bold mr-2'>Location:</span>Lonwala</div>

    <div className=' px-3 py-1'><span className='font-bold mr-2'>Rent:</span>85000</div>

    <div className=' px-3 py-3 grid'>
    <span className='font-bold mr-2 text-center'>Description:</span>
    this a huge farmhouse situated near main road and a huge area , which is availabe for multipurpose Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem dignissimos voluptatibus, quod cupiditate molestiae illo placeat ad quae autem.
    </div>

    <div className=' px-3 py-1'><span className='font-bold mr-2'>Address:</span>lonwala sector 17</div>

    <div className=' px-3 py-1'><span className='font-bold mr-2'>Posted on:</span>28 Feb , 2024</div>

    <Link to='/usermessages' className='text-center py-2 flex justify-center'>
        <button className='bg-green-600 hover:bg-green-500 text-white px-4 py-1 rounded-lg'>Apply</button>
    </Link>
    

    <div to='/otheruserprofile' className='flex items-center gap-3 p-4 justify-center'>
        <Link to='/otheruserprofile'>
        <Avatar src='https://i.guim.co.uk/img/media/a4eea3f7b5f6df1b96099e5e923ad1c8ae784aa0/128_0_1922_1153/master/1922.jpg?width=465&dpr=1&s=none' sx={{width:50,height:50}} />
        <span className='flex justify-center'>xyz</span>
        </Link>
    </div>

    <div className='flex justify-center'>
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.3617814477097!2d77.032810523242!3d28.471110013993627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e1!3m2!1sen!2sin!4v1708958549176!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
     </div>
     {/* FULL DETAILS ENDS HERE */}
    </div>
    
    </>
  )
}

export default FullDetail