import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import {Home} from '../Pages/Home';
import { loadPokeApi } from '../services/global.service';

export const RoutesPokemon = () => {
    useEffect(() => {
      async function getPokemons(){
          const pokemons = await loadPokeApi();
      }
      getPokemons()
    }, [])
    

    
    return (
    <>
        <Routes>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </>
)
}
