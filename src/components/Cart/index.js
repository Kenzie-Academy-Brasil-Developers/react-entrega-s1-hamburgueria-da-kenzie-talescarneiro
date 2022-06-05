import './styles.css'
import {TbTrashOff} from 'react-icons/tb'

const Cart = ({cartList, setCartList, removeFromCart}) => {

    const total = cartList.reduce((a, b) => {
        return a + b.price
    }, 0)

  return (
    <div className='cart'>
        <div className='cart-header'>
            <h3>Carrinho de compras</h3>
        </div>
        <div className='cart-notempty-body'>
            <div className='cart-notempty-info'>
                <div className='cart-product-list'>
                {cartList.map(product => (
                    <div key={product.id} className='cart-product'>
                        <figure>
                            <img src={product.img} alt=''/>
                        </figure>
                        <div className='cart-product-info'>
                            <h4>{product.name}</h4>
                            <p>{product.category}</p>
                        </div>

                        <div className='cart-product-remove'>
                            <button onClick={() => removeFromCart(product)}><TbTrashOff /></button>
                        </div>
                    </div>
                ))} 
                </div>

                <div className='cart-product-total'>
                    <div>
                        <p className='total-desc'>Total:</p>
                    </div>

                    <div>
                        <p className='total-price'>R$ {total.toFixed(2)}</p>
                    </div>
                </div>

                <div className='cart-btn-remove'>
                    <button onClick={() => setCartList([])}>Remover todos</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart