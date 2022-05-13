import React from 'react'
import Hot from '../Hot/Hot'
import New from '../New/New'
import './ListProduct.css'


const ListProduct = () => {
  return (
    <div className="list-product">
      <Hot/>
      <New/>
    </div>
  )
}

export default ListProduct