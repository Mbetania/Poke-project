import React, { useState } from 'react'

export const InvisibleBtn = () => {
  const [isPokedexOpen,setIsPokedexOpen] = useState(false)
  const openPokedexMenu = () => { 
    console.log('exito')
    setIsPokedexOpen(!isPokedexOpen)
  }

  return (
    <>
    {isPokedexOpen===true && <div>Prueba</div>}
    <div className='Invisible-btn' onClick={openPokedexMenu}></div>
    </>
  )
}
