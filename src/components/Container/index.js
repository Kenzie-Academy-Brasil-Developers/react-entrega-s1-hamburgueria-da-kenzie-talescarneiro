import React from 'react'
import './styles.css'

const Container = ({children}) => {
  return (
    <div className='container-body'>
        {children}
    </div>
  )
}

export default Container