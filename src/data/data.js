import React from 'react';

const data = () => {
	export const [products, setProducts] = useState([]);

	fetch('http://localhost:3000/product')
		.then((res) => res.json())
		.then((json) => setProducts(json));
};

export default data;
