import React from 'react';
import './profileCard.css';
import guImage from '../images/gu.png';


function profileCard(props) {
    const { name, age, occupation, location} = props;
    return(
        <div className='card'>
            <img src={guImage} alt="img" className='guimg'/>
          
            <div className='head'>
                 <h5 >Name: </h5> <p className='pr'> {name}</p>
            </div>

            <div className='head2'>
            <h5>Age: </h5><p> {age}</p>
            </div>

            <div className='head3'>
            <h5>Occupation:</h5><p> {occupation}</p>
            </div>

            <div className='head4'>
                 <h5>Location:</h5> <p> {location}</p>
            </div>

        </div>
    )
}
export default profileCard;