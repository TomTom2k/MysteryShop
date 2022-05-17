import React from 'react'
import { useEffect, useState } from 'react'
import Hots from '../../../data/hots.json'
import Title from '../../Title/Title'

import './Hot.css'


const Hot = () => {

  const [hots, setHots] = useState(Hots)
      
    useEffect(() => {
      fetch('http://localhost:3000/hot')
        .then((res) => res.json())
        .then(json => setHots(json))
    },[])

  return (
    <div className="list-hot">
      <Title text="Sản phẩm nổi bật" />
      <div className="hot">
        {
          hots.map((hot) => (
            <div key={hot.id} className="item">
              <img src={hot.image1} alt="" />
              <p>{hot.price}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Hot