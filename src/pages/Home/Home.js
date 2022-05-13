import React from 'react'
import Intro from '../../components/HomeComponents/Intro/Intro'
import ListProduct from '../../components/HomeComponents/ListProduct/ListProduct'

import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Intro/>
      <ListProduct/>
    </div>
  )
}

export default Home