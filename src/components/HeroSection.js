import React from 'react';
import '../App.css';
import './HeroSection.css';
import logo from '../logo.jpeg';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Mariage Adrien & Hanae</h1>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;
