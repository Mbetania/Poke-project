import React from 'react'
import fondo from '../Assets/background-image.png'

export const Background = () => {
  return (
    <div className='bg-container'>
        <img className='bg-pokedex' src={fondo} alt="" />
    </div>
  )
}
