import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {RoutesPokemon} from './Routes/RoutesPokemon'
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='pokemon/*' element={<RoutesPokemon/>}/>
      </Routes>
    </BrowserRouter>
  )
}
