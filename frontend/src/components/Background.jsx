import React from 'react'
import fondo from '../Assets/background-image.png'

export const Background = () => {
  return (
    <div className='bg-container'>
      <aside className='bg-pokedex'>
        <img src={fondo} alt="" />
      </aside>
        
    </div>
  )
}
