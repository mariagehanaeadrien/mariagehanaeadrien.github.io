import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import ecusson from '../ecusson.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <img src={ecusson} className="image1" alt="ecusson" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                      <Link
                      to='/'
                      className='nav-links'
                      onClick={closeMobileMenu}>
                        Accueil
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        to='/Programme'
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        Programme
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        to='/Itineraires_Hebergements'
                        className='nav-links'
                        onClick={closeMobileMenu}
                      >
                        Itinéraires & Hébergements
                      </Link>
                    </li>

                      <li className='nav-item'>
                        <Link
                          to='/A_faire_dans_la_region'
                          className='nav-links'
                          onClick={closeMobileMenu}
                        >
                          À faire dans la région
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          to='/RSVP'
                          className='nav-links'
                          onClick={closeMobileMenu}
                        >
                          RSVP
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          to='/Liste_de_mariage'
                          className='nav-links'
                          onClick={closeMobileMenu}
                        >
                          Liste de mariage
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          to='/Photos_Videos'
                          className='nav-links'
                          onClick={closeMobileMenu}
                        >
                          Photos & Vidéos
                        </Link>
                      </li>
               </ul>

        </div>
      </nav>
      </>
    );
}

export default Navbar
