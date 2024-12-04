import React from 'react';
import './productCard.css';

function productCard(props) {
    const { title, description1, description2, price, imageUrl} = props;
    return(
        
        <div className='card'>
           <div className='cards-container'>
          
              <div className='head'>
                   <p className='pr'> {title}</p>
              </div>

              <div className='head2'>
                  <h5>Description: </h5>
                    <ul>
                         <li>{description1}</li>
                         <li>{description2}</li>
                    </ul>
              </div>

              <div className='head3'>
                  <h5>Price:</h5><p> {price}</p>
              </div>

              <div className='head4'>
                   <img src={imageUrl} alt={title} className="product-image" />
              </div>

           </div>
        </div>    
    )
}
export default productCard;