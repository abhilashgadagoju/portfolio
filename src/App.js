
import './App.css';
import HeaderNav from './Components/Header/Headerbar';
import Homesection from './Components/Home/Homesection';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Feedback from './Components/Feedback/Feedback';


function App() {
  return (
    <div className="App">
      <HeaderNav/>
      <Homesection/>
      <About/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
