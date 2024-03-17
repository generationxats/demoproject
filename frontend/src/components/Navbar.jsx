import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { GoHome } from "react-icons/go";
import { MdHomeFilled } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { BiSolidMessage } from "react-icons/bi";
import { IoAddCircle, IoNotificationsOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { MdOutlineEventNote } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import '../App.css';
import {Link} from 'react-router-dom';
import { MdArrowDropDown } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { TbPremiumRights } from "react-icons/tb";



const Navbar = () => {

  const [activeIcon, setActiveIcon] = useState(null);
  const [sidenav,setSideNav] = useState(false);
  const [dropdown,setDropDown] = useState(false);


  // BOTTOM NAVIGATION BARS FOR MOBILE SCREEN ICON LOGIC...
  const handleIconClick = (icon) => {
    setActiveIcon(icon === activeIcon ? null : icon);
  };


  // SIDE NAV LOGIC ....
  const openSideNav = () => {
    setSideNav(!sidenav); 
  };
  

  // DROPDOWN LOGIC 
  const handleDropdown = () => {
    if(dropdown){
      setDropDown(false);
    } else{
      setDropDown(true);
    }
  }



  return (
    <>
    

    
     {/* COMMON NAVIGATION BAR STARTS HERE */}
    <nav className='bg-blue-500 flex items-center justify-between text-white px-4 py-3 cursor-pointer sticky top-0 z-10'>
      <span className='grid md:flex md:items-center gap-1 ml-[-10px] md:ml-0'>
        <span className='text-red-600 flex justify-center'><FaLocationDot/></span>
        <span className='text-sm'>current location</span>
      </span>
      <span className='flex items-center m-auto'>
        <Link to='/' className='font-bold text-xl'>demoProject</Link>
        <span className={`text-4xl ${dropdown ? 'upward-animation' : 'downward-animation'}`} onClick={handleDropdown}><MdArrowDropDown /></span>
      </span>
      <span onClick={openSideNav}><Avatar src='https://i.pinimg.com/736x/09/c7/c2/09c7c243c3523ec135101c7489b84971.jpg' sx={{width:30,height:30}} /> 
      </span>
    </nav>
    {
      dropdown && 
      <span className='bg-white shadow-xl shadow-gray-700 grid p-2 fixed left-[45%] md:left-[52%] top-12 rounded-lg cursor-pointer z-10'>
      <Link to='/' onClick={handleDropdown} className='p-1 hover:bg-gray-100 rounded-lg'>All posts</Link>
      <Link to='/myfollowingusers' onClick={handleDropdown} className='p-1 hover:bg-gray-100 rounded-lg'>My following posts</Link>
  </span>
    }
     {/* COMMON NAVIGATION BAR ENDS HERE */}




    {/* SIDE NAVIGATION BAR STARTS HERE */}
    {
      sidenav && 
      <div className='fixed top-0 w-full h-full z-10' style={{backgroundColor:'rgb(16,16,13,0.8)'}} onClick={openSideNav}>

     <div className='SIDENAV w-[60%] md:w-[20%] h-full bg-white cursor-pointer'>
     <div className=' bg-white py-2 flex items-center rounded-lg m-1'>
     <span className='text-red-700 text-2xl p-2' onClick={openSideNav}>
      <IoCloseCircle/>
      </span>
       <Link to='/myprofile' className='m-auto'>
     <Avatar src='https://i.pinimg.com/736x/09/c7/c2/09c7c243c3523ec135101c7489b84971.jpg' sx={{width:40,height:40}} />
      </Link>
     </div>
 
     <Link to='/createnewpost' className='bg-white hover:bg-gray-100 text-md m-1 rounded-lg flex items-center gap-2 p-4'>
      <span className='text-2xl'><IoIosAddCircleOutline/></span>
      <span>Create new post</span>
     </Link>
 
     <Link to='/myadds' className='bg-white hover:bg-gray-100 text-md m-1 rounded-lg flex items-center gap-2 p-4'>
      <span className='text-2xl'><FaRegNewspaper/></span>
      <span>My-adds</span>
     </Link>


     <Link to='/myfavourite' className='bg-white hover:bg-gray-100 text-md m-1 rounded-lg flex items-center gap-2 p-4'>
      <span className='text-2xl'><FaRegHeart/></span>
      <span>My Favourites</span>
     </Link>
 
     <Link to='/messages' className='bg-white hover:bg-gray-100 text-md m-1 rounded-lg flex items-center gap-2 p-4'>
      <span className='text-2xl'><TiMessages/></span>
      <span>Messages</span>
     </Link>
 
     <Link to='/notifications' className='bg-white hover:bg-gray-100 text-md m-1 rounded-lg flex items-center gap-2 p-4'>
      <span className='text-2xl'><IoNotificationsOutline/></span>
      <span>Noticifations</span>
     </Link>

     <Link to='/premiumdetails' className='bg-white hover:bg-gray-100 text-md m-1 rounded-lg flex items-center gap-2 p-4'>
      <span className='text-2xl'><TbPremiumRights/></span>
      <span>Premium Services</span>
     </Link>
 
     <Link to='/termsandconditions' className='bg-white hover:bg-gray-100 text-md m-1 rounded-lg flex items-center gap-2 p-4'>
      <span className='text-2xl'><MdOutlineEventNote/></span>
      <span>Terms & Conditions</span>
     </Link>
 
     <Link to='/login' className='bg-white hover:bg-gray-100 text-md m-1 rounded-lg flex items-center gap-2 p-4'>
      <span className='text-2xl'><CiLogin/></span>
      <span>Login</span>
     </Link>
 
     </div>
     </div>
    }
    {/* SIDE NAVIGATION BAR ENDS HERE */}



     {/* BOTTOM NAVIGATION BARS FOR MOBILE SCREEN STARTS HERE */}
     <nav className='bg-gray-200 md:hidden py-2 flex items-center justify-between fixed w-full bottom-0 px-4 z-10'>
      <Link to='/' className='text-3xl' onClick={() => handleIconClick('home')}>{activeIcon === 'home' ? <MdHomeFilled/> : <GoHome/>} </Link>
      <Link to='/messages' className='text-3xl' onClick={() => handleIconClick('message')}>{activeIcon === 'message' ? <BiSolidMessage/> : <TiMessage/> }</Link>
      <Link to='/createnewpost' className='text-3xl' onClick={() => handleIconClick('createnewpost')}>{activeIcon === 'createnewpost' ? <IoIosAddCircle/> : <IoIosAddCircleOutline/> }</Link>
      <Link to='/notifications' className='text-3xl' onClick={() => handleIconClick('notification')}>{activeIcon === 'notification' ? <IoNotifications/> : <IoNotificationsOutline/> }</Link>
      <Link to='/myprofile' className='text-3xl' onClick={() => handleIconClick('profile')}>{activeIcon === 'profile' ? <FaCircleUser/> : <Avatar src='https://i.pinimg.com/736x/09/c7/c2/09c7c243c3523ec135101c7489b84971.jpg' sx={{width:30,height:30}}/>}</Link>
     </nav>
     {/* BOTTOM NAVIGATION BARS FOR MOBILE SCREEN ENDS HERE */}
    
    
    </>
  )
}

export default Navbar


