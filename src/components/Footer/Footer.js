import React from 'react'
import { UilPhone, UilEnvelope, UilMapMarker, UilFacebook, UilInstagram, UilLinkedin} from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import wave from '../../image/wave.svg'
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" className="wave"/>
      <div className="f-icons">
        <div className="f-icon">
          <UilPhone/>
          <div className="f-text">+84334127445</div>
        </div>
        <div className="f-icon">
          <UilEnvelope/>
          <div className="f-text">ngthanhtin68@gmail.com</div>
        </div>
        <div className="f-icon">
          <UilMapMarker/>
          <div className="f-text">Đỗ Nhuận, Sơn kỳ, Tân Phú, Hồ Chí Minh</div>
        </div>
        
      </div>
      <div className="f-menu">
        <Logo/>
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/shop">Cửa hàng</Link>
          </li>
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
          <li>
            <Link to="/about">Giới thiệu</Link>
          </li>
        </ul>
        <div className="li-icons">
          <div><UilFacebook/></div>
          <div><UilInstagram/></div>
          <div><UilLinkedin/></div>
        </div>
      </div>
    </div>
  )
}

export default Footer