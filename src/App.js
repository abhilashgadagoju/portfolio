
import './App.css';
import HeaderNav from './Components/Header/Headerbar';
import Homesection from './Components/Home/Homesection';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Feedback from './Components/Feedback/Feedback';
import { useState, useEffect } from 'react';


function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={`App${theme === 'dark' ? ' dark-mode' : ''}`}>
      <HeaderNav theme={theme} toggleTheme={toggleTheme}/>
      <Homesection/>
      <About theme={theme}/>
      <Feedback/>
      <Footer theme={theme}/>
    </div>
  );
}

export default App;
