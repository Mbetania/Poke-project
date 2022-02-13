import React, { useEffect } from 'react'
import { loadPokeApi } from '../services/global.service'

export const Species = () => {
    useEffect(async() => {
    const results = await loadPokeApi('pokemon-species')
    console.log(results)
    
    }, [])
    
  return (
    <div>Species</div>
  )
}
