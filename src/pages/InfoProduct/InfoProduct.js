import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShowProduct } from '../../App';
import './InfoProduct.css';

const InfoProduct = () => {
	const [product, setProduct] = useState([]);
	const [image, setImage] = useState(true);
	const index = useContext(ShowProduct);

	const [amount, setAmount] = useState(1);
	const [size, setSize] = useState('s');

	useEffect(() => {
		fetch('http://localhost:3000/product')
			.then((res) => res.json())
			.then((json) => setProduct(json[index.product]));
	}, []);

	return (
		<div className="i-product">
			<div className="left-side">
				<div className="image">
					<img src={image ? product.image1 : product.image2} />
				</div>
				<div className="list-image">
					<div className="img image1" onClick={() => setImage(true)}>
						<img src={product.image1} />
					</div>
					<div className="img image2" onClick={() => setImage(false)}>
						<img src={product.image2} />
					</div>
				</div>
			</div>
			<div className="right-side">
				<div className="top-info">
					<div className="ip-title">{product.title}</div>
					<div className="ip-price">{product.price}</div>
					<div className="selection">
						<label htmlFor="">Kích cỡ :</label>
						<select
							name="size"
							id="size"
							onChange={(e) => setSize(e.target.value)}
						>
							<option value="s">S</option>
							<option value="m">M</option>
							<option value="l">L</option>
							<option value="xl">XL</option>
						</select>

						<label htmlFor="">Số lượng :</label>
						<input
							id="amount"
							type="number"
							min="1"
							onChange={(e) => setAmount(e.target.value)}
							value={amount}
						/>
					</div>
					<div className="buttons">
						<button>Thêm vào giỏ</button>
						<button>Mua ngay</button>
					</div>
				</div>
				<div className="paragram">
					Mọi sản phẩm tại Mystery đều được đảm bảo về chất lượng và
					được đổi trả ngay nếu sản phẩm gặp bật kỳ lỗi hay sự cố nào.
					<br />
					<br />
					Nếu bạn có gặp bất kì khó khăn gì thì{' '}
					<Link to="/contact">liên hệ</Link> ngay cho chúng tôi
				</div>
			</div>
		</div>
	);
};

export default InfoProduct;
