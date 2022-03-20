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
              LOGO
              </Link>
            </div>

          <small className='website-rights_Hanae'>
          <p> Mariage Adrien & Hanae </p>
          <p>  15 juillet 2023 </p>
          </small>

          <div className='footer-link-items'>
            <small className='website-rights'> <p> Hanae : +65 8894 1425  </p> <p> Adrien : +65 8921 7967 </p> </small>
            <small className='website-rights'> <p> 10 Jurong Lake Link </p> <p> #02-37 Lake Grande Condominum </p>  648131 Singapore</small>
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
