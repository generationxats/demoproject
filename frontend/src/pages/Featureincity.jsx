import { MdVerified } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Featureincity = () => {


  return (
    <>

    <div className='md:border-2 md:w-[50%] m-auto md:mt-2 pb-12 md:pb-1'>
        
    <div className='md:w-[40%] m-auto mt-1'>
        <img className="m-auto" src='https://housing-images.n7net.in/354cef8f/40d6f7643c39e7cb2f83b6be68c27645/v0/medium.jpg' />
    </div>

    <div className='flex justify-center my-4'>
        <input className='border p-2 rounded-lg w-[80%] md:w-[60%]' type='text' placeholder='enter your city / village ... ' />
    </div>

    <div className='flex justify-center my-4'>
        <select className='border p-2 rounded-lg w-[80%] md:w-[60%]'>
            <option>Select Categorie</option>
            <option>Properties</option>
            <option>Vehicles</option>
            <option>Electronics</option>
            <option>Other</option>
        </select>
    </div>


    <div className='flex justify-center my-4'>
        <select className='border p-2 rounded-lg w-[80%] md:w-[60%]'>
            <option>Select Type</option>
              <option>Single Room</option>
              <option>1Rk Studio Apartment</option>
              <option>1BHK Apartment</option>
              <option>2BHK Apartment</option>
              <option>3BHK Apartment</option>
              <option>4BHK Apartment</option>
              <option>5BHK Apartment</option>
              <option>6BHK Apartment</option>
              <option>PentHouse</option>
              <option>Bunglow</option>
              <option>Villa</option>
              <option>Duplex</option>
              <option>FarmHouse</option>
              <option>Hall</option>
              <option>Shop</option>
              <option>Office</option>
              <option>Independent House</option>
              <option>Independent Building</option>
              <option>Commercial Building</option>
              <option>Guest House</option>
              <option>Ground For Event</option>
              <option>Banquet Hall</option>
              <option>Other property type</option>
              <option>bike</option>
              <option>car</option>
              <option>suv</option>
              <option>mini truck</option>
              <option>truck</option>
              <option>bus</option>
              <option>Other vehicle type</option>
              <option>Electronic</option>
              <option>Other</option>
        </select>
    </div>

    <h1 className='text-center text-black text-xl font-bold bg-gray-200 py-3'>Select Package for Featuring your post</h1>

    <p className='flex items-center gap-1 justify-center py-4'><span className='text-yellow-600'><MdVerified/></span>Feature your add on top position in your region to gain more attraction .</p>

    <hr/>

    <h1 className='text-center text-black text-xl font-bold py-4'>Select Package</h1>

    <div className='overflow-auto flex items-center gap-2 w-full h-auto px-1'>
    
    <div className='w-[28%] h-[120px] bg-gray-100 hover:shadow-xl hover:shadow-black'>
    <div className='py-2 flex items-center justify-center gap-1 border-b-2'>
      <input type='checkbox' />
      <span className='font-bold'>15 Days</span>
    </div>
    <div className='flex items-center justify-center gap-1 mt-6'>
      <span><FaRupeeSign/></span>
      <span>299</span>
    </div>
    </div> 

    <div className='w-[28%] h-[120px] bg-gray-100 hover:shadow-xl hover:shadow-black'>
    <div className='py-2 flex items-center justify-center gap-1 border-b-2'>
      <input type='checkbox' />
      <span className='font-bold'>30 Days</span>
    </div>
    <div className='flex items-center justify-center gap-1 mt-6'>
      <span><FaRupeeSign/></span>
      <span>499</span>
    </div>
    </div> 

    <div className='w-[28%] h-[120px] bg-gray-100 hover:shadow-xl hover:shadow-black'>
    <div className='py-2 flex items-center justify-center gap-1 border-b-2'>
      <input type='checkbox' />
      <span className='font-bold'>45 Days</span>
    </div>
    <div className='flex items-center justify-center gap-1 mt-6'>
      <span><FaRupeeSign/></span>
      <span>699</span>
    </div>
    </div> 


    <div className='w-[28%] h-[120px] bg-gray-100 hover:shadow-xl hover:shadow-black'>
    <div className='py-2 flex items-center justify-center gap-1 border-b-2'>
      <input type='checkbox' />
      <span className='font-bold'>60 Days</span>
    </div>
    <div className='flex items-center justify-center gap-1 mt-6'>
      <span><FaRupeeSign/></span>
      <span>999</span>
    </div>
    </div> 


    </div>

    <button className='bg-violet-800 hover:bg-violet-900 m-auto flex justify-center text-white rounded-lg px-2 py-1 my-6'>Buy Package</button>


    <Link to='/termsandconditions' className='underline text-blue-500 flex justify-center py-4 bg-gray-100'>
    For more details read - Terms & conditions
    </Link>

    </div>

    </>
  )
}

export default Featureincity