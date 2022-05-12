import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UilShoppingBag, UilSearch, UilBars  } from '@iconscout/react-unicons'
import Logo from '../Logo/Logo'
import './Navbar.css'

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="navbar"> 
      <Logo/>
      <ul id="menu" className={isShow ? "menu active" :"menu"}>
      <div className="search-box">
          <input type="text"/>
        </div>
        <li>
          <Link to="/" >Trang chủ</Link>
        </li>
        <li>
          <Link to="/shop" >Cửa hàng</Link>
        </li>
        <li>
          <Link to="/contact" >Liên hệ</Link>
        </li>
        <li>
          <Link to="/about">Giới thiệu</Link>
        </li>
        <li>
          <Link to="/login">Đăng nhập</Link>
        </li>
      </ul>
      <div className="icons">
        <UilShoppingBag/>
        <UilSearch id="search" onClick={() => setIsShow(!isShow)}/>
        {isShow ? <input type="type" />: "" }
        <UilBars id="bars" onClick={() => setIsShow(!isShow)} />
      </div>

      
    </div>
  )
}

export default Navbar