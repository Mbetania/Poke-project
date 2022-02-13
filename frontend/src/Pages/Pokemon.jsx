import React, { useEffect } from 'react'
import { loadPokeApi } from '../services/global.service'

export const Pokemon = () => {
    useEffect(async() => {
    const result = await loadPokeApi("pokemon")
    console.log(result)
    
    }, [])
    
  return (
    <div>Pokemon</div>
  )
}
