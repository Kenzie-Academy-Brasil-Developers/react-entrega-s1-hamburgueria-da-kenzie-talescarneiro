import React from 'react'
import './styles.css'

const HeaderInputSearch = () => {
  return (
    <div className='header-search'>
      <input 
      type="text"
      placeholder='Digitar Pesquisa'
      />
      <button>Pesquisar</button>
    </div>
  )
}

export default HeaderInputSearch