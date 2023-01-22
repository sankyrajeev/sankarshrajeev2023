import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

import img3 from '../images/image3.jpeg'

import img4 from '../images/image4.jpeg'
import img5 from '../images/image5.jpeg'
import img6 from '../images/image6.jpeg'
import img7 from '../images/image7.jpeg'


function Cards() {
  return (
    <div className='cards'>
      <h1> Technology</h1>
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

          <h1 className='cards2'> ART</h1>
          <ul className="cards__items">
            <CardItem
              src={img6}
              text="Front-end Developement"
              label="UI/UX Applications"
              path="/front-end"
            />
           
             <CardItem
              src={img7}
              text="Artificial Intelligence"
              label="AI Powered Projects"
              path="/ai"
            />

          </ul>
        </div>
      </div>

    </div>
  );
}

export default Cards;