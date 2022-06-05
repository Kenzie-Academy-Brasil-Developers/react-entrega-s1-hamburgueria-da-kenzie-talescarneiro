import React from 'react'
import './styles.css'
import useState from 'react'

const HeaderInputSearch = () => {

  return (
    <div className='header-search'>
      <input
      type="text"
      placeholder='Digitar Pesquisa'
      />
      <button type='submit'>Pesquisar</button>
    </div>
  )
}

export default HeaderInputSearch