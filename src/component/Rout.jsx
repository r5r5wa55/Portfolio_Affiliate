
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Project from './Project'
import Working from './Working'

export default function Rout() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/project' element={<Project />}/>
          <Route path='/service' element={<Working />}/>
          

      </Routes>   
    </>
  )
}
