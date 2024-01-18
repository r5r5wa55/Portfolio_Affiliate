// eslint-disable-next-line no-unused-vars
import { useState ,useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import './App.css'
import Nav from './component/Nav';
import Rout from './component/Rout';
import { BrowserRouter } from 'react-router-dom'
import Footer from './component/Footer';


function App() {


  return (
    < >
      <BrowserRouter >
        <Nav />
        <Rout />
        <Footer />
      </BrowserRouter>
    </>
  )
}



export default App
