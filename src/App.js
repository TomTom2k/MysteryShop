
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import About from './pages/About/About';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
