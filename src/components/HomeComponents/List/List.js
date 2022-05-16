import React from 'react'
import Title from '../../Title/Title'
import './List.css'

const List = () => {
  return (
    <div className="list">
    <Title text="Các màu nổi bật"/>
    <div className="catelogy">
      <div className="l-item">
        <img src="//product.hstatic.net/200000260587/product/zve04004_419a18578e3041aa859349d1645c7492_grande.png" alt="" />
        <p>BLACK</p>
      </div>
      <div className="l-item">
      <img src="//product.hstatic.net/200000260587/product/zve03706_22ee3481680543e4b033f82324b31e63_grande.png" alt="" />
      <p>RED</p>
      </div>
      <div className="l-item">
      <img src="//product.hstatic.net/200000260587/product/zve03341_782b95e070a24046b4f2739c4e37bc02_grande.png" alt="" />
      <p>PINK</p>
      </div>
      <div className="l-item">
      <img src="//product.hstatic.net/200000260587/product/zve03228_4aa827cfe25c4633bb58bb4c061f9e95_grande.png" alt="" />
      <p>WHITE</p>
      </div>
    </div>
    </div>
  )
}

export default List