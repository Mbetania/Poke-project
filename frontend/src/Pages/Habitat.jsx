import React, { useEffect } from 'react'
import { loadPokeApi } from '../services/global.service'

export const Habitat = () => {
    useEffect(async() => {
    const result = await loadPokeApi('pokemon-habitat')
    console.log(result)
    
    }, [])
    
  return (
    <div>Habitat</div>
  )
}
