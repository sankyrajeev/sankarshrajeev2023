import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

import img3 from '../images/image3.jpeg'

import img4 from '../images/image4.jpeg'
import img5 from '../images/image5.jpeg'
import img6 from '../images/image6.jpeg'
import img7 from '../images/image7.jpeg'

import backsvg1 from '../images/wavehaikei2.svg'



function Cards() {
  return (
    <main>
      <div className='cards'>
        <h1 className='name'> TECHNOLOGY</h1>
        <div className="cards__container">
          <div className="cards__wrapper">

            <ul className="cards__items">
              <CardItem
                src={img3}
                text="Front-end Developement"
                label="UI/UX Applications"
                path="/front-end"
              />
              <CardItem
                src={img5}
                text="Full Stack Applications"
                label="MERN"
                path="/fullstack"
              />
              <CardItem
                src={img4}
                text="Artificial Intelligence"
                label="AI Powered Projects"
                path="/ai"
              />

            </ul>

            <h1 className='cards2 name'> ART</h1>
            <ul className="cards__items">
              <CardItem
                src={img6}
                text="Music Production"
                label="Music "
                path="/music"
              />

              <CardItem
                src={img7}
                text="Artificial Intelligence"
                label="AI Art"
                path="/aiart"
              />

            </ul>
            

          </div>
          
        </div>
        
      </div>
     
    </main>
  );
}

export default Cards;