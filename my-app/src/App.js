import './Components/productCard.css';
import ProductCard from './Components/productCard';

function App() {
  return (
    <div className="App">
      <ProductCard title="Wireless Headphones" description1="Noise-cancelling" description2="over-ear headphones" price="99.99$" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbmyr7-fiKgvA72wvgOLFFYv1liEn2fsZdA&s"/>
      <ProductCard title="Smart Watch" description1="Water Proof" description2="Unbreakable glass" price="249.99$" imageUrl="https://www.aysonline.pk/wp-content/uploads/2024/09/Untitled-design-15-2.jpg"/>
      <ProductCard title="Laptop" description1="Touch Screen" description2="Light weight" price="999.99$" imageUrl="https://www.devx.com/wp-content/uploads/laptop.jpg"/>
      <ProductCard title="Smart Phone" description1="Amoled dispaly" description2="Fast charging" price="499.99$" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSK8_BdPpbzhlPqJTQBXUofFwDAyrUceBwTg&s"/>

    </div>
  );
}

export default App;
