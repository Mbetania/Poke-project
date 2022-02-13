import React, { useEffect } from 'react'
import { loadPokeApi } from '../services/global.service'

export const Ability = () => {
    useEffect(async() => {
    const results = await loadPokeApi('ability')
    console.log(results)
    
    }, [])
    
  return (
    <div>Ability</div>
  )
}
