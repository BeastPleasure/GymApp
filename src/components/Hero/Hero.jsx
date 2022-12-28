import React from 'react';
import Header from '../Header/Header';
import './Hero.css';

import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {

    const transition = {type: 'spring', duration:3}

  return (

    <div className="hero">

        <div className='blur hero-blur'> </div>

        <div className="left-h">
            
            <Header />

            <div className="the-best-ad">
                
                <motion.div
                    
                    initial={{left: '238px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}} >

                </motion.div>

                <span> The Most Elite Fitness App In The World </span>

            </div>

            <div className="hero-text">

                <div>

                    <span className='stroke-text'> Tone </span>

                    <span> Your </span>

                </div>

                <div>

                    <span> Dream Body </span>

                </div>

                <div>

                    <span>

                        Created In VScode With React JS, Javascript, CSS, 
                        And Html As I'm Learning Web Development
                    
                    </span>

                </div>

            </div>


            {/* Figures  */}

            <div className='figures'>

                <div> 
                    
                    <span> <NumberCounter end={140} start={100} delay='4' preFix='+' /> </span>
                    
                    <span> Expert Coaches </span>
                
                </div>

                <div> 
                    
                    <span> 666 </span>
                    
                    <span> Members Enrolled </span>
                    
                </div>

                <div> 
                    
                    <span> <NumberCounter end={90} start={40} delay='4' preFix='~' /> </span>
                    
                    <span> Fitness Programs </span> 
                    
                </div>

            </div>


            {/* Hero Buttons */}

            <div className='hero-buttons'>

                <button className='btn'> Join Now </button>

                <button className='btn'> Learn More </button>

            </div>

        </div>


        <div className="right-h">
            
            <button className='btn'> Enter Here </button>

            <motion.div 
                initial={{right: '-1rem'}} 
                whileInView={{right: '4rem'}} 
                transition={transition} 
                className='heart-rate'>

                <img src={Heart} alt=''/>

                <span> Heart Rate </span>

                <span> 999 BPM </span>

            </motion.div>

            <img src={hero_image} alt='' className='hero-image'/>

            <img src={hero_image_back} alt='' className='hero-image-back'/>

           
            {/* Calories */}

            <div className='calories'>

                <img src={Calories} alt=''/>

                <div> 

                    <span> Calories Burned: </span>

                    <span> 333 Kcals </span>

                </div>

            </div>

        </div>
        
    </div>

  );
};

export default Hero;