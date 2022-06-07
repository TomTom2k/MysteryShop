import { logDOM } from '@testing-library/react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShowProduct } from '../../App';
import './Product.css';

const Product = ({ id, title, image1, image2, price }) => {
	const [image, setImage] = useState(true);

	const indexProduct = useContext(ShowProduct);
	return (
		<Link to="/info-product">
			<div
				className="product"
				onMouseOver={() => setImage(false)}
				onMouseOut={() => setImage(true)}
				onClick={() => {
					indexProduct.setProduct(id);
				}}
			>
				<div className="image">
					{image ? <img src={image1} /> : <img src={image2} />}
				</div>
				<div className="p-title">{title}</div>
				<div className="p-price">{price}</div>
			</div>
		</Link>
	);
};

export default Product;
