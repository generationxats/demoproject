import {Link} from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { MdWorkspacePremium } from "react-icons/md";



const PremiumServices = () => {
  

  return (
    <>
    
    <h1 className='text-center font-semibold text-2xl text-yellow-500 my-3'>Premium Sevices</h1>
    
    <div className='w-[97%] md:w-[30%] m-auto shadow-xl shadow-gray-600 overflow-hidden'>
      <img className='h-auto md:h-[220px] overflow-hidden m-auto' src='https://housing-images.n7net.in/354cef8f/40d6f7643c39e7cb2f83b6be68c27645/v0/medium.jpg' />
      <p className='text-sm mt-1 ml-2'>title...</p>
      <p className='text-sm ml-2'><span className='font-bold mr-1'>Rent:</span>27900</p>
      <p className='text-sm flex items-center ml-2'>
        <span className='text-red-600'><IoLocationSharp/></span>
        <span>city</span>
      </p>
      <p className='text-sm ml-2'>address </p>

      <Link to='/featureincity' className='bg-yellow-400 hover:bg-yellow-500 rounded-lg flex items-center w-[90%] m-auto justify-center mt-3 py-2 gap-2'>
        <MdWorkspacePremium/>
        Feature this post in your city
      </Link>

      <Link to='/featureinnation'  className='bg-yellow-400 hover:bg-yellow-500 rounded-lg flex items-center justify-center mt-3 mb-3 py-2 gap-2 w-[90%] m-auto'>
        <MdWorkspacePremium/>
        Feature this post in accross nation
      </Link>

      <Link to='/premiumdetails' className='flex justify-center py-1 underline text-blue-500'>See history and your recent features </Link>

    </div>
    
    </>
  )
}

export default PremiumServices