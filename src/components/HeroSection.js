import React from 'react';
import '../App.css';
import './HeroSection.css';
import logo from '../output.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={logo} className="App-logo" alt="logo" autoPlay loop  />
      <h1>Mariage <span> Hanaé & Adrien </span> </h1>
      <h2>15 juillet 2023 </h2>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;
