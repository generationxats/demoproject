import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyProfile from './pages/MyProfile';
import CreateNewPost from './pages/CreateNewPost';
import { Routes,Route } from 'react-router-dom';
import MyAdds from './pages/MyAdds';
import MyFavourite from './pages/MyFavourite';
import EditProfile from './pages/EditProfile';
import FullDetail from './pages/FullDetail';
import OtherUserProfile from './pages/OtherUserProfile';
import Messages from './pages/Messages';
import UserMessages from './pages/UserMessages';
import Notifications from './pages/Notifications';
import TermsAndConditions from './pages/TermsAndConditions';
import Myfollowingusers from './pages/Myfollowingusers';
import PremiumDetails from './pages/PremiumDetails';
import PremiumServices from './pages/PremiumServices';
import Featureincity from './pages/Featureincity';
import Featureinnation from './pages/Featureinnation';



const App = () => {
  return (
    <>
    
    <Navbar/>

    <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/myprofile' element={<MyProfile/>} />
    <Route path='/createnewpost' element={<CreateNewPost/>} />
    <Route path='/myadds' element={<MyAdds/>} />
    <Route path='/myfavourite' element={<MyFavourite/>} />
    <Route path='/editprofile' element={<EditProfile/>} />
    <Route path='/fulldetail' element={<FullDetail/>} />
    <Route path='/otheruserprofile' element={<OtherUserProfile/>} />
    <Route path='/messages' element={<Messages/>} />
    <Route path='/usermessages' element={<UserMessages/>} />
    <Route path='/notifications' element={<Notifications/>} />
    <Route path='/termsandconditions' element={<TermsAndConditions/>} />
    <Route path='/myfollowingusers' element={<Myfollowingusers/>} />
    <Route path='/premiumservices' element={<PremiumServices/>} />
    <Route path='/premiumdetails' element={<PremiumDetails/>} />
    <Route path='/featureincity' element={<Featureincity/>} />
    <Route path='/featureinnation' element={<Featureinnation/>} />

    </Routes>
    
    
    </>
  )
}

export default App