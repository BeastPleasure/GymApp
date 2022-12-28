import React, { useState } from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';


const Testimonials = () => {

    const [selected, setSelected] = useState(0);

  return (

    <div className="testimonials">

        <div className="left-t">

           <span> Testimonials </span>
           
           <span className='stroke-text'> What Our </span>
           
           <span> Clients Think </span> 

           <span> 

            <h4> I made the right choice by choosing the Fitclub and by </h4>
            <h4> choosing the right plan and program I already achieved my </h4>
            <h4> ideal body! </h4>
           
           </span>

           <span>

                <span style={{color: 'aqua'}}> 

                    {testimonialsData[selected].name} 
                
                </span>
                    {" "}
                    - {testimonialsData[selected].status} 
            
           </span>

        </div>


        <div className="right-t">

            <div></div>

            <div></div>
               
            <img src={testimonialsData[selected].image} alt=''/>


        </div>


    </div>
  );
};

export default Testimonials; 