let users = [];
fetch('http://localhost:3000/user')
	.then((res) => res.json())
	.then((json) => (users = [...json]));

export const isRequired = (value, field) =>
	value ? undefined : `Vui lòng nhập ${field}`;

export const isConfimred = (value, text) =>
	value === text ? undefined : `Vui lòng nhập lại`;

export const isEmail = (value) => {
	let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return res.test(value) ? undefined : 'Đây không phải là email';
};

export const isExistsEmail = (value, type) => {
	let index = users.findIndex((user) => user.email === value);
	if (type === 'login')
		return index !== -1 ? undefined : 'Email không tồn tại';
	else if (type == 'register')
		return index === -1 ? undefined : 'Email đã tồn tại ';
};

export const isExistsPassword = (value, email) => {
	let index = users.findIndex(
		(user) => user.password === value && user.email === email
	);
	return index !== -1 ? undefined : `Mật khẩu không đúng`;
};

export const postData = (data) => {
	fetch('http://localhost:3000/user', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
};
