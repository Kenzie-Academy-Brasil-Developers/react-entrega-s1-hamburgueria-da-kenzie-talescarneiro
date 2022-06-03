import React from 'react'
import image from './hamburguer.png'
import './styles.css'

const Product = () => {
  return (
    <div className='product'>
        <div className='product-header'>
            <figure>
                <img src={image} alt='imagem'/>
            </figure>
        </div>
        <div className='product-body'>
            <h2 className='product-title'>Hamburguer</h2>
            <p className='product-category'>Sanduiches</p>
            <p className='product-price'>R$ 14.00</p>
            <button className='product-button'>Adicionar</button>
        </div>
    </div>
  )
}

export default Product