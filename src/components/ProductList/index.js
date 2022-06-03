import React from 'react'
import './styles.css'

const ProductList = ( {children} ) => {
  return (
    <div className='container-products'>
        {children}
    </div>
  )
}

export default ProductList