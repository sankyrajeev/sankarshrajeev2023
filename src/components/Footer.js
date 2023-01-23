import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
   <div className='footer-container sticky-bottom'>
      
      
<section class='social-media'>
  <div class='social-media-wrap'>
    <div class='footer-logo'>
    <Link to="/" className="navbar-brand "> S R </Link>

    </div>
    <small class='website-rights'>Sankarsh Rajeev © 2023</small>
    <div class='social-icons '>
      <Link
        class='social-icon-link facebook'
        to='/'
        target='_blank'
        aria-label='Facebook'
      >
        <i class='fab fa-facebook-f' />
      </Link>
      <Link
        class='social-icon-link instagram'
        to='/'
        target='_blank'
        aria-label='Instagram'
      >
        <i class='fab fa-instagram' />
      </Link>
      <Link
        class='social-icon-link youtube'
        to='/'
        target='_blank'
        aria-label='Youtube'
      >
        <i class='fab fa-youtube' />
      </Link>
      <Link
        class='social-icon-link twitter'
        to='/'
        target='_blank'
        aria-label='Twitter'
      >
        <i class='fab fa-twitter' />
      </Link>
      <Link
        class='social-icon-link twitter'
        to='/'
        target='_blank'
        aria-label='LinkedIn'
      >
        <i class='fab fa-linkedin' />
      </Link>
    </div>
  </div>
</section>
</div> 
   
  );
}

export default Footer;