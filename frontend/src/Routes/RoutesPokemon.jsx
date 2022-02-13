import React from 'react'
import { Route, Routes } from 'react-router'
import {Home} from '../Pages/Home';

export const RoutesPokemon = () => {
  return (
    <>
        <Routes>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </>
  )
}
