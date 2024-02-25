import React from 'react'
import '../App.css'

function Product(props) {
  return (
    <div className="productContainer">
      <h3>{props.productName}</h3>
      <button onClick={props.handleClick}>x</button>
    </div>
  )
}

export default Product
