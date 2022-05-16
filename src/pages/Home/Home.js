import React from 'react'
import Intro from '../../components/HomeComponents/Intro/Intro'
import List from '../../components/HomeComponents/List/List'
import Hot from '../../components/HomeComponents/Hot/Hot'
import New from '../../components/HomeComponents/New/New'

import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Intro/>
      <Hot/>
      <New/>
      <List/>
    </div>
  )
}

export default Home