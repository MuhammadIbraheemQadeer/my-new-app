import Counter from './Components/Counter';
import './App.css';
import Calculator from './Components/Calculator';
import LoginForm from './Components/LoginForm';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  return (
    <div className='App'>
    <Counter/>
    <Calculator/>
    <LoginForm/>
    <ShoppingCart/>
    </div>
  )
}
export default App;
