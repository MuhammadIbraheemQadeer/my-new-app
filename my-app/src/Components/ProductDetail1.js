import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail1.css';

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description1: "Noise-cancelling",
    description2: "Over-ear headphones",
    price: "$99.99",
    imageUrl: "../images/headphones.jpg"
  },
  {
    id: 2,
    title: "Smart Watch",
    description1: "Water Proof",
    description2: "Unbreakable glass",
    price: "$249.99",
    imageUrl: "../images/watch.jpg"
  },
  {
    id: 3,
    title: "Laptop",
    description1: "Touch Screen",
    description2: "Light weight",
    price: "$999.99",
    imageUrl: "../images/laptop.jpg"
  },
  {
    id: 4,
    title: "Smart Phone",
    description1: "Amoled display",
    description2: "Fast charging",
    price: "$499.99",
    imageUrl: "../images/smartphone.jpg"
  }
];

function ProductDetail1() {
  const { id } = useParams();
  
  const product = products.find(products => products.id === Number(id));

  return (
    <div className='card'>
      <div className='cards-container'>
        <div className='head'>
          <p className='pr'>{product.title}</p>
        </div>
        <div className='head4'>
          <img src={product.imageUrl} alt={product.title} className="product-image" />
        </div>
        <div className='head2'>
          <h5>Description: </h5>
          <ul>
            <li>{product.description1}</li>
            <li>{product.description2}</li>
          </ul>
        </div>
        <div className='head3'>
          <h5>Price: <span>{product.price}</span></h5>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail1;
