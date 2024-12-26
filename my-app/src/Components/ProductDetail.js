import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-detail">
      <img src={`/images/${product.image}`} alt={product.name} className="product-image" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
