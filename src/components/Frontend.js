import React from 'react';
import FeItem from './FeItem';
import './Cards.css';
import './Frontend.css';

import img3 from '../images/image3.jpeg'

import img4 from '../images/image4.jpeg'
import img5 from '../images/image5.jpeg'
import img6 from '../images/image6.jpeg'
import img7 from '../images/image7.jpeg'
import img8 from '../images/image8.jpeg'
import img9 from '../images/image9.jpeg'
import img10 from '../images/image10.jpeg'
import img11 from '../images/image11.jpeg'
import img12 from '../images/image12.jpeg'
import img13 from '../images/image13.jpeg'
import img14 from '../images/image14.jpeg'

import backsvg1 from '../images/wavehaikei2.svg'
import Footer from './Footer';



function Frontend() {
  return (
    <main>
      <div className='cards fe'>
        <h1 className='name feh1'>FRONT-END</h1>
        <div className="cards__container">
          <div className="cards__wrapper">

            <ul className="cards__items">
              <FeItem
                src={img8}
                text="Travelite"
                label="UI/UX "
                path="https://travelite.herokuapp.com/#/"
              />
              <FeItem
                src={img9}
                text="Washoe"
                label="UI/UX "
                path="https://sankyrajeev.github.io/washoe-final/"
              />
             

            </ul>
            <ul className="cards__items">
              
              <FeItem
                src={img10}
                text="Los Angeles Mountains"
                label="UI/UX"
                path="https://sankyrajeev.github.io/display-travel/"
              />
               <FeItem
                src={img11}
                text="Kobe Bryant Interview"
                label="UI/UX"
                path="https://sankyrajeev.github.io/interview-design/"
              />
              <FeItem
                src={img12}
                text="Note Taker"
                label="Front-End App"
                path="https://shocking-zombie-29357.herokuapp.com/"
              />

            </ul>
            <ul className="cards__items">
              <FeItem
                src={img13}
                text="Weather Dashboard"
                label="Front-End App"
                path="https://sankyrajeev.github.io/Weather-Dashboard/"
              />
              <FeItem
                src={img14}
                text="Workday Scheduler"
                label="UI/UX "
                path="https://sankyrajeev.github.io/work-day-scheduler/"
              />
             
    
            </ul>
            

          
           

           
            

          </div>
          
        </div>
        
      </div>
      <Footer />
    </main>
  );
}

export default Frontend;