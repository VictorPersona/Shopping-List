import { useEffect, useState } from 'react'
import Product from './assets/Product.jsx'

import './App.css'

/*
    1)heading
    2)add bar 
      -textarea
      -button
    3)list
      -delete button

  -->list array to store the products (listArray)
  -->map over that list to show the products(product)
  -->after add button is clicked add to the listArray
  --> after delete button is clicked delete it from the list
*/

function App() {
  const [listArray, setListArray] = useState([])
  // const [product, setProduct] = useState({ id: '', productName: '' })
  const [inputValue, setInputValue] = useState('')
  const products = listArray.map((item, index) => (
    <Product
      key={index}
      id={index}
      productName={item.productName}
      handleClick={() => deleteProduct(item.id)}
    />
  ))

  function addProduct(name) {
    const newItem = { id: listArray.length + 1, productName: name }
    const newList = [...listArray, newItem]
    setListArray(newList)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    addProduct(inputValue)
    setInputValue('')
  }

  function deleteProduct(id) {
    const newList = listArray.filter((product) => product.id != id)
    setListArray(newList)
  }

  return (
    <>
      <h1>Shopping List</h1>
      <div className="addBar">
        <h2>Add something to the list</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Enter Something"
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="listContainer">{products}</div>
    </>
  )
}

export default App
