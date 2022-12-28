import React from 'react';
import './Join.css';

const Join = () => {
  return (
    <div className='Join' id='join-us'>


        <div className='left-j'>

            <hr />

            <div>

                <span className='stroke-text'> READY TO </span>
                
                <span> LEVEL UP </span>

            </div>

            <div>

                <span> YOUR BODY </span>
                
                <span className='stroke-text'> AND SOUL? </span>

            </div>

        </div>


        <div className='right-j'>

            <form action='' className='email-container'>

                <input 
                    type='text'
                    name='user_email' 
                    placeholder='Enter Your E-mail Here'/>
                
                <button className='btn btn-j'> Join Now </button>

            </form>

        </div>

    </div>
  )
}

export default Join;