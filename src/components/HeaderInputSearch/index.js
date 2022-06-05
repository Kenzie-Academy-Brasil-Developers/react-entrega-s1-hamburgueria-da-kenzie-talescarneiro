import React from 'react'
import './styles.css'
import {useState} from 'react'

const HeaderInputSearch = ({search}) => {

  const [inputSearch, setInputSearch] = useState('')

  return (
    <div className='header-search'>
      <input
      onChange={(event) => {
        setInputSearch(event.target.value)
        search(inputSearch)
      }}
      type="text"
      placeholder='Digitar Pesquisa'
      />
      <button onClick={() => search(inputSearch)} type='submit'>Pesquisar</button>
    </div>
  )
}

export default HeaderInputSearch