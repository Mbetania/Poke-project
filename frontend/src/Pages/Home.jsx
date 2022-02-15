import { Button } from '@mui/material'
import { Outlet } from 'react-router'
import React from 'react'
import { InvisibleBtn } from '../components/units/InvisibleBtn'



export const Home = () => {

  return (
    <div>
      {/* <Button variant='contained' color='primary'>press</Button> */}
      <Outlet/>
      <InvisibleBtn/>
    </div>
  )
}
