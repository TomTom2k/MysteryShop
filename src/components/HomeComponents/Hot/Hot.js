import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShowProduct } from '../../../App';
import Hots from '../../../data/hots.json';
import Title from '../../Title/Title';

import './Hot.css';

const Hot = () => {
	const [hots, setHots] = useState(Hots);
	const indexProduct = useContext(ShowProduct);

	useEffect(() => {
		fetch('http://localhost:3000/hot')
			.then((res) => res.json())
			.then((json) => setHots(json));
	}, []);

	return (
		<div className="list-hot">
			<Title text="Sản phẩm nổi bật" />
			<div className="hot">
				{hots.map((hot) => (
					<Link
						to="/info-product"
						className="item"
						key={hot.id}
						onClick={() => {
							indexProduct.setProduct(hot.id);
						}}
					>
						<img src={hot.image1} alt="" />
						<p>{hot.price}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Hot;
