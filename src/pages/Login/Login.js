import React from 'react';
import { useEffect, useState, createContext } from 'react';
import Sigin from '../../components/LoginComponents/Sigin/Sigin';
import Register from '../../components/LoginComponents/Register/Register';

import './Login.css';
import Paragraph from '../../components/LoginComponents/Paragraph/Paragraph';

export const LoginContext = createContext();

const Login = () => {
	const [isLogin, setIsLogin] = useState(true);
	let value = {
		isLogin,
		setIsLogin,
	};

	return (
		<LoginContext.Provider value={value}>
			<div className="l-wrapper">
				<Sigin />
				<Register />
				<Paragraph />
			</div>
		</LoginContext.Provider>
	);
};

export default Login;
