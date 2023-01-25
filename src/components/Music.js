import React from 'react';
import CardItem from './MusicItem';
import './Cards.css';
import './Music.css';

import img3 from '../images/image3.jpeg'

import img4 from '../images/image4.jpeg'
import img20 from '../images/image20.jpeg'
import img19 from '../images/image19.jpeg'
import img7 from '../images/image7.jpeg'

import backsvg1 from '../images/wavehaikei2.svg'



function Music() {
  return (
    <main>
      <div className='cards music'>
        <h1 className='name music_name'> MUSIC PRODUCTION</h1>
        <div className="cards__container">
          <div className="cards__wrapper">

            <ul className="cards__items">
              <CardItem
                src={img19}
                text="Spotify"
                label="Music"
                path="https://open.spotify.com/artist/58pA9fdnjFNTomI2G7jHLU?si=xcywhleUTKCAY_U00YRXLg"
              />
              <CardItem
                src={img20}
                text="Apple Music"
                label="Music"
                path="https://music.apple.com/in/artist/vontell/1512201102"
              />
              <CardItem
                src={img4}
                text="YouTube (Includes all Music Videos)"
                label="Music"
                path="https://youtube.com/@vontellvevo3157"
              />

            </ul>
            

          </div>
          
        </div>
        
      </div>
     
    </main>
  );
}

export default Music;