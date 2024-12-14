import Specialitymenu from './Components/Specialitymenu';
import Landingpage from './Components/Landingpage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';



function App() {

  const item1 = {
    name: "Spicy Chicken Wings",
    description: "Our signature spicy wings",
    price: "Rs. 500",
    image:
    "https://images.deliveryhero.io/image/fd-pk/Products/49411247.jpg?width=%s"
    };
    const item2 = {
    name: "Classic Fried Chicken",
    description: "Traditional recipe",
    price: "Rs. 350",
    image:
    "https://images.deliveryhero.io/image/fd-pk/Products/26754778.jpg?width=%s"
    };
    const item3 = {
      name: "Chicken Burger Combo",
      description: "Burger with fries and drink",
      price: "Rs. 650",
      image:
      "https://images.deliveryhero.io/image/fd-pk/Products/58219340.jpg?width=%s"
      };

  return (
<div className='App'>
      <Navbar/>
     <Landingpage/>
     <div className="content">
        <Specialitymenu item1={item1} item2={item2} item3={item3} />
      </div>
     <Footer />


      
      </div>
    
  )
}

export default App;
