import React from 'react'
import Product from './Product'
import '../styles/components/Products.css'
import AppContext from '../context/AppContext'

const Products = () => {
  const {state, addToCart} = React.useContext(AppContext);
  const {products} = state

  const handleAddToCart = product =>{
    const random = Math.floor(Math.random()*1000)
    const newProduct = {...product, id: product.id - random}

    addToCart(newProduct)
  } 

  return (
    <div className='Products'>
        <div className='Products-items'>
            {products.map(product => (
                <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
            ))}

        </div>
    </div>
  )
}

export default Products