import React, { useContext, useState } from 'react';
import { LoginContext } from '../../../pages/Login/Login';

import {
	isEmail,
	isRequired,
	isExistsEmail,
	isConfimred,
	postData,
} from '../../../pages/Login/Logic';

const Register = () => {
	const value = useContext(LoginContext);
	const [email, setEmail] = useState('');
	const [errEmail, setErrEmail] = useState(' ');

	const [password, setPassword] = useState('');
	const [errPassword, setErrPassword] = useState(' ');

	const [entryPassword, setEntryPassword] = useState('');
	const [errEntryPassword, setErrEntryPassword] = useState(' ');

	const checkEmail = (value, field) => {
		let errors = [
			isRequired(value, field),
			isEmail(value),
			isExistsEmail(value, 'register'),
		];
		for (let error of errors) {
			if (error) return error;
		}
	};

	const checkPassword = (value, field) => {
		let errors = [isRequired(value, field)];
		for (let error of errors) {
			if (error) return error;
		}
	};

	const checkEntryPassword = (value, field) => {
		if (password) {
			let errors = [
				isRequired(value, field),
				isConfimred(value, password),
			];
			for (let error of errors) {
				if (error) return error;
			}
		}
		return '';
	};

	const handleRegister = (e) => {
		setErrEmail(checkEmail(email, 'Email'));
		setErrPassword(checkPassword(password, 'mật khẩu'));
		setErrEntryPassword(checkEntryPassword(entryPassword, 'đúng mật khẩu'));
		let user = {
			email: email,
			password: password,
		};

		if (errEmail || errPassword || errEntryPassword) e.preventDefault();
		else {
			postData(user);
		}
	};

	return (
		<div className={value.isLogin ? 'form' : 'form active'} id="register">
			<form>
				<div className="f-title">Đăng ký</div>

				<div className="input-item">
					<label htmlFor="email-regis">Tài khoảng</label>
					<input
						type="text"
						placeholder="vd:abcxys@gmail.com"
						id="email-regis"
						onChange={(e) => setEmail(e.target.value)}
						onBlur={(e) =>
							setErrEmail(checkEmail(e.target.value, 'Email'))
						}
					/>
					<div className="message">{errEmail}</div>
				</div>

				<div className="input-item">
					<label htmlFor="pass-regis">Mật khẩu</label>
					<input
						type="password"
						id="pass-regis"
						onChange={(e) => setPassword(e.target.value)}
						onBlur={(e) =>
							setErrPassword(
								checkPassword(e.target.value, 'mật khẩu')
							)
						}
					/>
					<div className="message">{errPassword}</div>
				</div>

				<div className="input-item">
					<label htmlFor="entry-pass-regis">Nhập lại mật khẩu</label>
					<input
						type="password"
						id="entry-pass-regis"
						onChange={(e) => setEntryPassword(e.target.value)}
						onBlur={(e) =>
							setErrEntryPassword(
								checkEntryPassword(
									e.target.value,
									'đúng mật khẩu'
								)
							)
						}
					/>
					<div className="message">{errEntryPassword}</div>
				</div>

				<button
					className="btn-submit"
					onClick={(e) => handleRegister(e)}
				>
					Đăng ký
				</button>
			</form>
		</div>
	);
};

export default Register;
