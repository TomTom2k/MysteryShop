import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import ContactImage from '../../image/contact.jpg';
import './Contact.css';

const Contact = () => {
	const form = useRef();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSuccessful, setIsSuccessful] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		if (name && email && message) {
			console.log(name || email || message);
			emailjs
				.sendForm(
					'service_ygvo9uq',
					'template_9s6ik0p',
					form.current,
					'0csyyDoAvSk6zYIpC'
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);

			setName('');
			setEmail('');
			setMessage('');
			setIsSuccessful(true);
		}
	};

	return (
		<div className="contact">
			<div className="c-left-side">
				<img src={ContactImage} />
			</div>
			<div className="c-right-side">
				<form ref={form} onSubmit={sendEmail}>
					<label>Name</label>
					<input
						type="text"
						name="from_name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<label>Email</label>
					<input
						type="email"
						name="user_email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label>Message</label>
					<textarea
						name="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button type="submit"> Gửi</button>

					<span>
						{isSuccessful
							? 'Cảm ơn bạn đã liên hệ đến chúng tôi'
							: 'Nhập đầy đủ thông tin để gửi'}
					</span>
				</form>
			</div>
		</div>
	);
};

export default Contact;
