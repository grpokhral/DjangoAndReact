import React from 'react';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="text-center">@MadeInNePal-CopyRight</p>
        <div class="social">
          <Link to="">
            <FaFacebook
              color="blue"
              size="1.6em"
              margin="5px"
              style={{ textDecoration: 'none', margin: '3px' }}
            />
          </Link>
          <Link to="https://www.facebook.com/">
            <FaInstagram
              color="blue"
              size="1.6em"
              style={{ textDecoration: 'underline black' }}
            />
          </Link>  
        </div>
      </div>
    </>
  );
};

export default Footer;
