import React from 'react'
import './styles.css'

const Cart = () => {
  return (
    <div className='cart'>
        <div className='cart-header'>
            <h3>Carrinho de compras</h3>
        </div>

        <div className='cart-body'>
            <div className='cart-info'>
                <h4>Sua sacola está vazia</h4>
                <p>Adicione itens</p>
            </div>
        </div>
    </div>
  )
}

export default Cart