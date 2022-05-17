import React, { useContext } from 'react';
import { LoginContext } from '../../../pages/Login/Login';

const ContentP = ({ title, text, suggest, button }) => {
	const value = useContext(LoginContext);

	return (
		<div>
			<h2>{title}</h2>
			<h3>{text}</h3>
			<div className="btn">
				<p>{suggest}</p>
				<button
					className="primary-btn"
					onClick={() => {
						value.setIsLogin(!value.isLogin);
					}}
				>
					{button}
				</button>
			</div>
		</div>
	);
};

export default ContentP;
