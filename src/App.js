import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import { createContext, useState } from 'react';
import InfoProduct from './pages/InfoProduct/InfoProduct';

export const ShowProduct = createContext();

function App() {
	const [product, setProduct] = useState('1');
	const value = {
		product,
		setProduct,
	};

	return (
		<ShowProduct.Provider value={value}>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/info-product" element={<InfoProduct />} />
				</Routes>
				<Footer />
			</div>
		</ShowProduct.Provider>
	);
}

export default App;
