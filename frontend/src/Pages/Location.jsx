import React, { useEffect } from 'react'
import { loadPokeApi } from '../services/global.service'

export const Location = () => {
    useEffect(async() => {
    const result = await loadPokeApi('location')
    console.log(result)
    
    }, [])
    
  return (
    <div>Location</div>
  )
}
