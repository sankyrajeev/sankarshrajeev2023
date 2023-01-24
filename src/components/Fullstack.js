import React from 'react';
import FullStackItem from './FullStackItem';
import './Cards.css';

import img15 from '../images/image15.jpeg'

import img16 from '../images/image16.jpeg'
import img17 from '../images/image17.jpeg'
import img18 from '../images/image18.jpeg'


import backsvg1 from '../images/wavehaikei2.svg'
import Footer from './Footer';



function Fullstack() {
  return (
    <main>
      <div className='cards'>
        <h1 className='name'>FULL STACK PROJECTS</h1>
        <div className="cards__container">
          <div className="cards__wrapper">

            <ul className="cards__items">
              <FullStackItem
                src={img15}
                text="Totoro's"
                label="MERN STACK"
                path="/https://infinite-cliffs-46127.herokuapp.com/login"
              />
              <FullStackItem
                src={img16}
                text="Student Database Management"
                label="MVC"
                path="https://peaceful-temple-56068.herokuapp.com/"
              />
              <FullStackItem
                src={img17}
                text="New Sound's in Town"
                label="Full Stack"
                path="https://alejandraquintero018.github.io/New-Sounds-in-Town-/"
              />

            </ul>
            <ul className="cards__items">
              <FullStackItem
                src={img18}
                text="Tech Book"
                label="MVC"
                path="https://my-tech-book.herokuapp.com/"
              />
              
              <FullStackItem
                src={img18}
                text="YET TO BE UPDATED"
                label="Full Stack"
                path="#"
              />

            </ul>


            
            

          </div>
          
        </div>
        
      </div>
     
    </main>
  );
}

export default Fullstack;