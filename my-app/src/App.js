import logo from './logo.svg';
import './App.css';
import './Components/App1.css';
import Greeting from './Components/Greeting';
import Header from './Components/Header';
import Content from './Components/content';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Greeting/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
