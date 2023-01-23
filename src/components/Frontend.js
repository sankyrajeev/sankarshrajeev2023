import React from 'react';
import FeItem from './FeItem';
import Footer from './Footer';
import img3 from '../images/image3.jpeg'
import './Frontend.css'

import img8 from '../images/image8.jpeg'
import img5 from '../images/image5.jpeg'
import img6 from '../images/image6.jpeg'
import img7 from '../images/image7.jpeg'
import { Link } from 'react-router-dom';
function Fe() {
  return (
    <main>
    <div className='cards'>
      <h1 className='name _FE'>FRONT-END</h1>
      <div className="cards__container">
        <div className="cards__wrapper">

          <ul className="cards__items">
            <FeItem
              src={img8}
              text="Travelite"
              label="Front-End"
              link="https://travelite.herokuapp.com/#/"
            />
            <FeItem
              src={img5}
              text="Washoe"
              label="Front-End"
              link="https://sankyrajeev.github.io/washoe-final/"
            />
            <FeItem
              src={img8}
              text="Artificial Intelligence"
              label="AI Powered Projects"
              path="/ai"
            />
            

          </ul>

         
          

        </div>
        
      </div>
      
    </div>
   <Footer />
  </main>
  );
}

export default Fe;
