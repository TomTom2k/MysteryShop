import React, { useContext } from 'react';
import { LoginContext } from '../../../pages/Login/Login';
import ContentP from './ContentP';
import './Paragraph.css';

const Paragraph = () => {
	const value = useContext(LoginContext);

	return (
		<div className={value.isLogin ? 'paragraph active' : 'paragraph'}>
			{value.isLogin ? (
				<ContentP
					title="WELLCOME !"
					text="Xin chào bạn đã đến với Mystery, chúng tôi sẽ cung cấp cho bạn những mẫu sản phẩm tốt nhất"
					suggest="Nêu chưa có tài khoảng"
					button="Đăng ký"
				/>
			) : (
				<ContentP
					title="HEY, YOU !"
					text="Chào bạn đã quay trở lại Mystery, cảm ơn bạn đã lựa chọn sản phẩm của chúng tôi"
					suggest="Nêu đã tài khoảng"
					button="Đăng nhập"
				/>
			)}
		</div>
	);
};

export default Paragraph;
