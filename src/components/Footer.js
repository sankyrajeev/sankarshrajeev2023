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
    <a
        class='social-icon-link github'
        href='https://www.facebook.com/sankarshrajeev'
        target='_blank'
        aria-label='Facebook'
      >
        <i class='fab fa-facebook-f' />
      </a>
      
      <a
        class='social-icon-link facebook'
        href='https://github.com/sankyrajeev?tab=repositories'
        target='_blank'
        aria-label='GitHub'
      >
        <i class='fab fa-github' />
      </a>
      <a
        class='social-icon-link instagram'
        href='https://www.instagram.com/iamvontell'
        target='_blank'
        aria-label='Instagram'
      >
        <i class='fab fa-instagram' />
      </a>
      {/* <a
        class='social-icon-link youtube'
        href='/'
        target='_blank'
        aria-label='Youtube'
      >
        <i class='fab fa-youtube' />
      </a> */}
      <a
        class='social-icon-link twitter'
        href='https://twitter.com/iamvontell'
        target='_blank'
        aria-label='Twitter'
      >
        <i class='fab fa-twitter' />
      </a>
      <a
        class='social-icon-link twitter'
        href='https://www.linkedin.com/in/sankarsh-rajeev-5b4a5b10a/'
        target='_blank'
        aria-label='LinkedIn'
      >
        <i class='fab fa-linkedin' />
      </a>
    </div>
  </div>
</section>
</div> 
   
  );
}

export default Footer;