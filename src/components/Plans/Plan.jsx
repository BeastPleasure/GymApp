import React from 'react';
import './Plan.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';


const Plan = () => {
  return (
    <div className='plans-container'>

        <div className='blur plans-blur-1'> </div>

        <div className='blur plans-blur-2'> </div>

        <div className='programs-headers' >

            <span className='stroke-text'> READY TO START </span>

            <span> YOUR TRANSFORMATION</span>

            <span className='stroke-text'> WITH US NOW </span>

        </div>

        <div className='plans'>

            {plansData.map((plan, i) => (
                <div className='plan' key={i}> 

                    {plan.icon}
                    <span> {plan.name} </span>
                    <span> $ {plan.price} </span>

                    <div className='features'>
                        {plan.features.map((feature, i) => (
                            <div className='feature'> 
                                <img src={whiteTick} alt="" />
                                {/* <span> key={i}>{feature} </span> */}
                                <span> {feature} </span>
                            </div>
                        ))}

                    </div>

                    <div>
                    
                        <span> See More Benefits -> </span>

                    </div>

                    <button className='btn'> Join Now </button>

                </div>
            ))}

        </div>

    </div>
  );
};

export default Plan;