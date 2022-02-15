import React from 'react'
import { Route, Routes } from 'react-router'

// PAGES
import {Home} from '../Pages/Home';
import { Pokemon } from '../Pages/Pokemon';
import { Location } from '../Pages/Location';
import { Species } from '../Pages/Species';
import {Ability} from '../Pages/Ability'
import { Habitat } from '../Pages/Habitat';
import { Background } from '../components/Background';

export const RoutesPokemon = () => {
    return (
    <>
        <Background/>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/pokemon' element={<Pokemon/>}/>
            <Route path='/location' element={<Location/>}/>
            <Route path='/pokemon-species' element={<Species/>}/>
            <Route path='/ability' element={<Ability/>}/>
            <Route path='/pokemon-habitat' element={<Habitat/>}/>
        </Routes>
    </>
)
}
