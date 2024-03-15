import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoCarSportOutline } from "react-icons/io5";
import { FiSpeaker } from "react-icons/fi";
import { MdOutlineRoomService } from "react-icons/md";
import {Link} from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";




const Myfollowingusers = () => {


 const [propertylist , setPropertyList] = useState(false);
 const [vehiclelist,setVehicleList] = useState(false);
 const [electronicslist,setElectronicsList] = useState(false);
 const [otherlist,setOtherList] = useState(false);
 const [fav,setFav] = useState(false);
 const [propertytype,setPropertyType] = useState('allproperties');
 const [vehicletype,setVehicleType] = useState('allvehicles');
 const [electronictype,setElectronicType] = useState('allelectronics');
 const [othertype,setOtherType] = useState('allothers');


 const handlePropertyList = () => {
  setPropertyList(!propertylist);
  setVehicleList(false);
  setElectronicsList(false);
  setOtherList(false);
  setVehicleType('allvehicles');
  setElectronicType('allelectronics');
  setOtherType('allothers');
 }

 const handlevehicleList = () => {
  setVehicleList(!vehiclelist)
  setPropertyList(false);
  setElectronicsList(false);
  setOtherList(false);
  setPropertyType('allproperties');
  setElectronicType('allelectronics');
  setOtherType('allothers');
 }

 const handleElectronicsList = () => {
  setElectronicsList(!electronicslist);
  setPropertyList(false);
  setVehicleList(false);
  setOtherList(false);
  setPropertyType('allproperties');
  setVehicleType('allvehicles');
  setOtherType('allothers');
 }

 const handleOtherList = () => {
  setOtherList(!otherlist);
  setPropertyList(false);
  setVehicleList(false);
  setElectronicsList(false);
  setPropertyType('allproperties');
  setVehicleType('allvehicles');
  setElectronicType('allelectronics');
 }

 const handlefav = () => {
  setFav(!fav)
 }

  return (
    <>
    

    {/* THIS IS SERACH FIELDS STARTS */}
    <div className='p-3 md:flex md:items-center md:justify-around bg-black md:w-[90%] m-auto'>
    <div className='flex items-center justify-center gap-1'>
      <input type='text' className='border p-2 rounded-lg w-[250px]' placeholder='search location..' />
      <span className='text-xl bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg'><CiSearch/></span>
    </div>
    <div className='flex items-center my-3 md:my-0 gap-1'>
      <input type='text' className='border p-2 rounded-lg w-[400px]' placeholder='search items....' />
      <span className='text-xl bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-lg'><CiSearch/></span>
    </div>
    </div>
    {/* THIS IS SERACH FIELDS ENDS */}





    {/* THIS IS ICONS OF ALL CATEGORIES STARTS */}
     <div className='bg-white shadow-xl shadow-gray-600 md:w-[90%] m-auto flex items-center justify-around mt-[2px] cursor-pointer'>

     <div className='grid w-[95px] p-2 gap-1'>
      <span className=' transition-all tarnsition-duration-500 hover:transform hover:scale-110 grid justify-center '>
      <span className='m-auto font-bold' onClick={handlePropertyList}>Properties</span>
     <span className='text-3xl flex justify-center p-[2px]' onClick={handlePropertyList}><HiOutlineBuildingOffice2/></span>
     </span>
     <span className='bg-green-500 text-white text-sm rounded-lg text-center shadow-xl shadow-gray-600' onClick={handlePropertyList}>{propertytype === 'allproperties' ? '' : propertytype}</span>
     {
      propertylist && 
      <div className='fixed top-14 left-0 w-full h-full' style={{backgroundColor:'rgb(16,16,13,0.9)'}} onClick={handlePropertyList}>

      <span className=' text-red-600 hover:text-red-700 text-4xl fixed top-16 right-2' onClick={handlePropertyList}><FaWindowClose/></span>  

      <span className='text-2xl font-bold text-white flex justify-center py-4  mt-24 md:mt-12 mb-6'>Select Property Type</span>

      <select value={propertytype} onChange={(e)=> setPropertyType(e.target.value)} className='flex w-[70%] md:w-[25%] m-auto rounded-lg bg-white shadow-xl shadow-gray-800 p-2' onClick={(e) => e.stopPropagation()}>
      <option value='allproperties'>All</option>
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
      <option>Grounds For Events</option>
      <option>Banquet Halls</option>
      <option>other</option>
     </select>
 
     <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-1 flex m-auto rounded-lg my-12' onClick={handlePropertyList}>Done</button>

    </div>
     }
     </div>



     <div className='grid w-[95px]  p-2 gap-1 cursor-pointer'>
     <span className='transition-all tarnsition-duration-500 hover:transform hover:scale-110 grid justify-center'>
      <span className='m-auto font-bold' onClick={handlevehicleList}>Vehicles</span>
     <span className='flex justify-center text-3xl p-[2px]' onClick={handlevehicleList}><IoCarSportOutline/></span>
     </span>
     <span className='bg-green-500 text-white text-sm rounded-lg text-center shadow-xl shadow-gray-600' onClick={handlevehicleList}>{vehicletype === 'allvehicles' ? '' : vehicletype}</span>
     {
      vehiclelist && 
      <div className='fixed top-14 left-0 w-full h-full' style={{backgroundColor:'rgb(16,16,13,0.9)'}} onClick={handlevehicleList}>

      <span className=' text-red-600 hover:text-red-700 text-4xl fixed top-16 right-2' onClick={handlevehicleList}><FaWindowClose/></span>  

      <span className='text-2xl font-bold text-white flex justify-center py-4  mt-24 md:mt-12 mb-6'>Select Vehicle Type</span>
      <select value={vehicletype} onChange={(e) => setVehicleType(e.target.value)} className='flex w-[70%] md:w-[25%] m-auto rounded-lg bg-white p-2' onClick={(e) => e.stopPropagation()}>
      <option value='allvehicles'>All</option>
      <option>2 wheelers</option>
      <option>4 wheelers</option>
      <option>mini trucks</option>
      <option>trucks</option>
      <option>Bus</option>
      <option>crains</option>
      <option>other</option>
    </select>
    <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-1 flex m-auto rounded-lg my-12' onClick={handlevehicleList}>Done</button>

</div>
     }
     </div>



     <div className='grid w-[95px]  p-2 gap-1 cursor-pointer'>
     <span className='transition-all tarnsition-duration-500 hover:transform hover:scale-110 grid justify-center'>
     <span className='m-auto font-bold' onClick={handleElectronicsList}>Electronics</span>
     <span className='flex justify-center text-3xl p-[2px]' onClick={handleElectronicsList}><FiSpeaker/></span>
      </span>
      <span className='bg-green-500 text-white text-sm rounded-lg text-center shadow-xl shadow-gray-600' onClick={handleElectronicsList}>{electronictype === 'allelectronics' ? '' : electronictype}</span>
     {
      electronicslist && 
      <div className='fixed top-14 left-0 w-full h-full' style={{backgroundColor:'rgb(16,16,13,0.9)'}} onClick={handleElectronicsList}>

      <span className=' text-red-600 hover:text-red-700 text-4xl fixed top-16 right-2' onClick={handleElectronicsList}><FaWindowClose/></span>  

      <span className='text-2xl font-bold text-white flex justify-center py-4  mt-24 md:mt-12 mb-6'>Select Electronics Type</span>
      <select value={electronictype} onChange={(e)=>setElectronicType(e.target.value)} className='flex w-[70%] md:w-[25%] m-auto rounded-lg bg-white p-2' onClick={(e) => e.stopPropagation()}>
      <option>All</option>
      <option>Electronics</option>
      <option>other</option>
    </select>
    <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-1 flex m-auto rounded-lg my-12' onClick={handleElectronicsList}>Done</button>

</div>
     }
  
     </div>

     <div className='grid w-[95px] p-2 gap-1 cursor-pointer'>
     <span className='transition-all tarnsition-duration-500 hover:transform hover:scale-110 grid justify-center'>
      <span className='m-auto font-bold' onClick={handleOtherList}>Other</span>
     <span className='flex justify-center  text-3xl p-[2px]' onClick={handleOtherList}><MdOutlineRoomService/></span>
     </span>
     <span className='bg-green-500 text-white text-sm rounded-lg text-center shadow-xl shadow-gray-600' onClick={handleOtherList}>{othertype === 'allothers' ? '' : othertype}</span>
     {
      otherlist && 
      <div className='fixed top-14 left-0 w-full h-full' style={{backgroundColor:'rgb(16,16,13,0.9)'}} onClick={handleOtherList}>

      <span className=' text-red-600 hover:text-red-700 text-4xl fixed top-16 right-2' onClick={handleOtherList}><FaWindowClose/></span>  

      <span className='text-2xl font-bold text-white flex justify-center py-4  mt-24 md:mt-12 mb-6'>Select Other Type</span>
      <select value={othertype} onChange={(e)=>setOtherType(e.target.value)} className='flex w-[70%] md:w-[25%] m-auto rounded-lg bg-white p-2' onClick={(e) => e.stopPropagation()}>
      <option>All</option>
      <option>Accessories</option>
      <option>Outfits</option>
      <option>Other</option>
    </select>
    <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-1 flex m-auto rounded-lg my-12' onClick={handleOtherList}>Done</button>

   </div>
     }
     </div>


     </div>
    {/* THIS IS ICONS OF ALL CATEGORIES ENDS */}




    {/* THIS IS ALL DATA STARTS HERE */}
    <div className=' w-full px-2 flex flex-wrap justify-center md:gap-3 md:mt-2'>
        {/* CARD OF THE DATA STARTS HERE */}
        <div  className='shadow-xl shadow-gray-500 w-full md:w-[30%] h-[430px]  mt-4 md:mt-2 overflow-hidden  hover:shadow-gray-700'>
          <Link to='/fulldetail'>
            <div className='overflow-hidden w-full h-[300px]'>
            <img src='https://www.decorilla.com/online-decorating/wp-content/uploads/2023/05/correcto.jpg' />
            </div>
            <p className='ml-2 text-sm'>office space available for rent</p>
            <p className='text-sm ml-2'><span className='font-bold text-black mr-2'>Rent:</span>120000</p>
            <p className='flex items-center ml-[6px] text-sm'>
                <span className='text-red-700'><IoLocationSharp/></span>
                <span>gurugram</span>
            </p>
            <p className='ml-2 text-sm'>sector 21 , gurugram</p>
            </Link>
            <p className='w-[55%] m-auto flex items-center gap-2 justify-center py-1 rounded-lg mt-2 border-2 border-black' onClick={handlefav}>
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
        {/* CARD OF THE DATA ENDS HERE */}


                {/* CARD OF THE DATA STARTS HERE */}
                <div  className='shadow-xl shadow-gray-500 w-full md:w-[30%] h-[430px]  mt-4 md:mt-2 overflow-hidden  hover:shadow-gray-700'>
          <Link to='/fulldetail'>
            <div className='overflow-hidden w-full h-[300px]'>
            <img src='https://www.decorilla.com/online-decorating/wp-content/uploads/2023/05/correcto.jpg' />
            </div>
            <p className='ml-2 text-sm'>office space available for rent</p>
            <p className='text-sm ml-2'><span className='font-bold text-black mr-2'>Rent:</span>120000</p>
            <p className='flex items-center ml-[6px] text-sm'>
                <span className='text-red-700'><IoLocationSharp/></span>
                <span>gurugram</span>
            </p>
            <p className='ml-2 text-sm'>sector 21 , gurugram</p>
            </Link>
            <p className='w-[55%] m-auto flex items-center gap-2 justify-center py-1 rounded-lg mt-2 border-2 border-black' onClick={handlefav}>
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
        {/* CARD OF THE DATA ENDS HERE */}

     </div>
    {/* THIS IS ALL DATA ENDS HERE */}
    
    
    </>
  )
}

export default Myfollowingusers

