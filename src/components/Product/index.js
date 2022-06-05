import React from 'react'
import './styles.css'

const Product = ({product, addToCart}) => {

  return (
    <div className='product'>
        <div className='product-header'>
            <figure>
                <img src={product.img} alt={product.name}/>
            </figure>
        </div>
        <div className='product-body'>
            <h2 className='product-title'>{product.name}</h2>
            <p className='product-category'>{product.category}</p>
            <p className='product-price'>R$ {product.price.toFixed(2)}</p>
            <button className='product-button' onClick={() => addToCart(product)}>Adicionar</button>
        </div>
    </div>
  )
}

export default Product