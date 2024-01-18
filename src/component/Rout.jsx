
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

export default function Rout() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
      </Routes>   
    </>
  )
}
