import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../../pages/Login/Login';
import { UilFacebookF, UilEnvelope } from '@iconscout/react-unicons';

import {
	isEmail,
	isRequired,
	isExistsEmail,
	isExistsPassword,
} from '../../../pages/Login/Logic';
import { Link } from 'react-router-dom';

const Sigin = () => {
	const value = useContext(LoginContext);
	const [email, setEmail] = useState('');
	const [errEmail, setErrEmail] = useState(' ');
	const [password, setPassword] = useState('');
	const [errPassword, setErrPassword] = useState(' ');
	// kiểm tra email
	const checkEmail = (value, field) => {
		let errors = [
			isRequired(value, field),
			isEmail(value),
			isExistsEmail(value, 'login'),
		];
		for (let error of errors) {
			if (error) return error;
		}
	};
	// kiểm tra password
	const checkPassword = (value, field) => {
		let errors = [isRequired(value, field)];
		errors = email
			? [isRequired(value, field), isExistsPassword(value, email)]
			: [isRequired(value, field)];
		for (let error of errors) {
			if (error) return error;
		}
	};
	// kiểm tra khi nhấp button
	const handleClick = (e) => {
		setErrEmail(checkEmail(email, 'login', 'Email'));
		setErrPassword(checkPassword(password, 'Mật khẩu'));
		if (errEmail || errPassword) e.preventDefault();
	};

	return (
		<div className={value.isLogin ? 'form active' : 'form'} id="login">
			<form>
				<div className="f-title">Đăng nhập</div>
				<div className="input-item">
					<label htmlFor="email-login">Tài khoảng</label>
					<input
						type="text"
						placeholder="vd:abcxys@gmail.com"
						id="email-login"
						onChange={(e) => setEmail(e.target.value)}
						onBlur={(e) =>
							setErrEmail(checkEmail(e.target.value, 'Email'))
						}
					/>
					<div className="message">{errEmail}</div>
				</div>
				<div className="input-item">
					<label htmlFor="pass-login">Mật khẩu</label>
					<input
						type="password"
						id="pass-login"
						onChange={(e) => setPassword(e.target.value)}
						onBlur={(e) =>
							setErrPassword(
								checkPassword(e.target.value, 'Mật khẩu')
							)
						}
					/>
					<div className="message">{errPassword}</div>
				</div>
				<Link to="..">
					<button
						type="submit"
						className="btn-submit"
						onClick={(e) => handleClick(e)}
					>
						Đăng nhập
					</button>
				</Link>
				<div className="l-icons">
					<UilFacebookF />
					<UilEnvelope />
				</div>
			</form>
		</div>
	);
};

export default Sigin;
