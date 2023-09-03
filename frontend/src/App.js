import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Homepage from './pages/Homepage';
import Servicespage from './pages/Servicespage';
import Contact from './pages/Contact';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {
  const [working, setworking] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/")
    .then((res) => setworking(true))
    .catch(() => setworking(false));
  }, [])
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/services" element={<Servicespage/>} />
      <Route path="/contact" element={<Contact/>} />  
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
