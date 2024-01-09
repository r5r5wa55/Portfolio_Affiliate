import { useState ,useEffect } from 'react'
import axios from 'axios';
import './App.css'
import Favpoke from './component/Favpoke';


function App() {
  const [countz, setCount] = useState(1)
  const [poke, setPoke] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [error, seterror] = useState(false);
  const [likepoke,setLikePoke] = useState([])

  useEffect(()=>{
    
    let abortController = new AbortController();
    const loadpoke = async ()=>{
      try{
        const respon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${countz}`,{
          signal:abortController.signal
        })
        setPoke(respon.data);
        seterror(false);
   
  
      }catch(error){
        seterror(true);
        seterror("Something went wrong",error);
        console.log("catch"+error);
      }finally{
        console.log("finally");
      }
    }
    loadpoke();
    return ()=> abortController.abort();


  },[countz])



  const Prev = () =>{
    setCount((count)=>count+1)
  }

  const wepolke =()=>{setLikePoke((oldpoke)=>[...oldpoke,poke])}


  return (
    < >
    <button>Day1</button>
    
     <div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl  p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 '>
        <div>
          <h1>{poke?.name}</h1>
            <button onClick={wepolke}>Like</button>
            <br />
            <img src={poke.sprites?.other?.home?.front_default} alt={poke?.name} />
            <ul>
            {poke?.abilities?.map((poke,index)=>(
              <li key={index}>{poke.ability?.name}</li>
            ))}
            </ul>
        
            <button onClick={(()=>{setCount((number)=>number-1)})}>ย้อนกลับ</button>
            <button onClick={Prev}>ไปข้างหน้า</button>
        </div>
          <div>
            <Favpoke likepoke={likepoke}/>
          </div>
      </div>
     </div>
   
    </>
  )
}



export default App
