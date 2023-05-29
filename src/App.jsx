import React from 'react';
import {} from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import Video from './pages/Video.jsx';
import Upload from './pages/Upload.jsx';
import Signup from './pages/signup.jsx';
import Login from './pages/Login.jsx';

const App = () => {
  return (
   <Router>
<Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/watch/videos' element={<Video/>}/>
      <Route path='/watch/free/videos' element={<Video/>}/>
      <Route path='/upload/videos' element={<Upload/>}/>
      <Route path='/dashboard/register' element={<Signup/>}/>
      <Route path='/dashboard/login' element={<Login/>}/>
    </Routes>
<Footer/>
   </Router> 
  )
}

export default App