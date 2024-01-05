import { useState ,useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [countz, setCount] = useState("")

  useEffect(()=>{
    
    const loadpoke = ()=>{
      try{
        const respon = axios.get(`https://pokeapi.co/api/v2/pokemon/1`)

        console.log(respon?.data);
      }catch(error){
        console.log("catch"+error);
      }finally{
        console.log("finally");
      }
    }

    loadpoke()

  },[])


  console.log(countz)

  return (
    <>
     
    
   
    </>
  )
}

export default App
