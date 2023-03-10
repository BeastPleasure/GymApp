import React from 'react';
import './Programs.css';
import {programsData} from '../data/programsData';
import RightArrow from '../assets/rightArrow.png';

const Programs = () => {
  return (

    <div className="Programs" id="programs">

        <div className='programs-headers'>

            <span className='stroke-text'> Explore Our </span>
            <span> Options </span>
            <span className='stroke-text'> To Sculpt You </span>

        </div>

        <div className='program-categories'>

          {programsData.map((program) => (
            <div className='category'> 
              {program.image}
              <span> {program.heading} </span>
              <span> {program.details} </span>

              <div className='join-now'> 

                <span> Join Now </span>

                <img src={RightArrow} alt='' />

              </div>

            </div>
          ))}

        </div>

    </div>

  );
};

export default Programs;