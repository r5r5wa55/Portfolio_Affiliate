// eslint-disable-next-line no-unused-vars
import { useState ,useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import './App.css'
import Nav from './component/Nav';
import Home from './component/Home';
import Rout from './component/Rout';
import { BrowserRouter } from 'react-router-dom'


function App() {


  return (
    < >
      <BrowserRouter >
        <Nav />
        <Home />
        <Rout />
      </BrowserRouter>
    </>
  )
}



export default App
