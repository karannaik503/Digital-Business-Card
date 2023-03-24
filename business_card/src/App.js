import React from 'react';
import './index.css';
import Profile from './Profile.js';
import Bio from './Bio.js';
import SocialMedia from "./SocialMedia.js";
import MainContent from "./MainContent.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className='inner-box'>
      <Profile/>
      <Bio/>
      <SocialMedia/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
