import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>

              </Link>
            </div>

          <small className='website-rights_Hanae'>
          <p> Mariage Hanae & Adrien   </p>
          <p>  XXX </p>
          </small>

          <div className='footer-link-items'>
            <small className='website-rights'> <p> Hanae : XXX  </p> <p> Adrien : XXX </p> </small>
            <small className='website-rights'> <p> XXX </p> <p> XXX </p>  XXX </small>
            <Link to='#' onClick={(e) => {
                    window.location.href = "mailto:contact@adressecommune.ovh";
                    e.preventDefault();}}> contact@adressecommune.ovh </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
