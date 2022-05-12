import React from 'react'
import hots from '../../../data/hots.json'

import './Hot.css'


const Hot = () => {
  return (
    <div className="list-hot">
      <div className="title">Sản phẩm nổi bật</div>
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