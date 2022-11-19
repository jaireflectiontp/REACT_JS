import '../../App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from "./Home";
import About from './Header/Nav/About';
import Contact from './Header/Nav/Contact';
import Manage from './Header/Nav/Manage';
import Context from './Context/Context';
import Login from './Login';
import SignUp from './SignUp';
import EditInfo from './EditInfo/EditInfo';
import UserContext from './Context/UserContext';
import { useState } from 'react';
import VideoContext from './Context/videoContext';
function App() {
const heading='New Page';
const [currentUser, setCurrentUser]=useState()
const logData=(data)=>{
  setCurrentUser(data)
}
const [videos, setVideos]=useState(localStorage.getItem('videos') ? JSON.parse(localStorage.getItem('videos')) : [])
const setuserVideos=(videoList)=>{
  setVideos(videoList)
}

  return (
    <>
      <div className="bg">

        <BrowserRouter>
       <UserContext.Provider value={{currentLogged:currentUser, setCurrentLogged:logData}}>
       <VideoContext.Provider value={{eachvideoContent:videos, setEachvideoContent:setuserVideos}}>
        <Context.Provider value={{title:heading}}>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Manage' element={<Manage />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/EditInfo' element={<EditInfo />} />
          </Routes>
          </Context.Provider>
          </VideoContext.Provider>
          </UserContext.Provider>
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
