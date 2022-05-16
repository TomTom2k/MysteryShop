import React, { useState } from 'react'
import './Product.css'

const Product = ({title, image1, image2, price}) => {
  const [image, setImage] = useState(true)
  
  return (
    <div className="product" onMouseOver={() => setImage(false)} onMouseOut={() => setImage(true)}>
      <div className="image">
        {image?<img src={image1}/>:<img src={image2}/>}
      </div>
      <div className="p-title">{title}</div>
      <div className="p-price">{price}</div>
    </div>
  )
}

export default Product