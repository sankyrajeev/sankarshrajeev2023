import React from 'react';
import './About.css'
import backsvg from '../images/wavehaikei.svg'
import myimg from '../images/myImage.png'

function About() {
    return (
        <div>
            
            <main class="hero-container">
            
                
                <p className='textonly'> Hello 👋 I'm Sankarsh Rajeev & I do

                    <section class="animation">
                        <div class="first"><div>Web Developement</div></div>
                        <div class="second"><div> Artificial Intelligence </div></div>
                        <div class="third"><div>Music production</div></div>
                    </section>
                    
                </p>
                <img src={myimg} alt="Avatar" class="container"/>
                <img className='backimg' src={backsvg} alt="waves" />
            </main>


        </div>
    );
}

export default About;

