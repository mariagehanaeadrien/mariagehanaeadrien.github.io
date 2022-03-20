import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
              LOGO
              </Link>
            </div>

          <small class='website-rights_Hanae'>
          <p> Mariage Adrien & Hanae </p>
          <p>  15 juillet 2023 </p>
          </small>

          <div class='footer-link-items'>
            <small class='website-rights'> <p> Hanae : +65 8894 1425  </p> <p> Adrien : +65 8921 7967 </p> </small>
            <small class='website-rights'> <p> 10 Jurong Lake Link </p> <p> #02-37 Lake Grande Condominum </p>  648131 Singapore</small>
            <Link to='/contact@adressecommune.ovh'> contact@adressecommune.ovh </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Footer;
