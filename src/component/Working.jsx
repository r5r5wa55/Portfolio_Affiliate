// eslint-disable-next-line no-unused-vars
import React from 'react'
import Poke from '../assets/working-img/pokeapi_1024.png'
export default function Working() {
  return (

    <div>
        <div className='bg-wecolor h-60 flex flex-col justify-center items-center'>
            <h2 className='font-bold text-2xl mb-5'>Project</h2>
            <h1 className='xl:text-6xl md:text-6xl sm:text-6xl font-bold text-blue-400 m-0 flex text-3xl'>ผลงาน<div className="mx-5 text-red-400">&</div> การวางแผน</h1>
        </div>
        <div className="mb-10 flex justify-center ">
            <div className="w-10/12 h-full grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-items-center">
                <div className="w-full flex justify-center items-center">
                <div className="bg-blue-400 w-full h-[300px] m-5 rounded-lg  hover:shadow-3xl  transition hover:scale-90  delay-200 duration-600 ease-in-out border-none hover:cursor-pointer hover:bg-blue-500">
                    <div className="w-full h-full flex items-center justify-center text-center relative">
                        <img src={Poke} alt="" className='w-full'/>
                        <h1 className='w-full h-full m-auto absolute pt-40 pb-0 opacity-0 hover:opacity-100 transition delay-200 duration-600 ease-in-out text-white font-medium text-md'>
                           <h2 className='w-full h-4/6  flex items-end justify-center'>to Day</h2> 
                        </h1>
                    </div>
         
                </div>
                </div>
                <div className="w-full flex justify-center items-center  ">
                <div className="bg-blue-400 w-full h-[300px] m-5 rounded-lg hover:shadow-3xl  transition hover:scale-90 delay-200 duration-600 ease-in-out border-none hover:cursor-pointer hover:bg-blue-500  ">
                    <div className="w-full">we</div>
                </div>
                </div>
                <div className="w-full flex justify-center items-center">
                <div className="bg-blue-400 w-full h-[300px] m-5 rounded-lg hover:shadow-3xl  transition hover:scale-90 delay-200 duration-600 ease-in-out border-none hover:cursor-pointer hover:bg-blue-500 ">
                    <div className="w-full">we</div>
                </div>
                </div>
                <div className="w-full flex justify-center items-center">
                <div className="bg-blue-400 w-full h-[300px] m-5 rounded-lg hover:shadow-3xl  transition hover:scale-90 delay-200 duration-600 ease-in-out border-none hover:cursor-pointer hover:bg-blue-500 ">
                    <div className="w-full">we</div>
                </div>
                </div>
                <div className="w-full flex justify-center items-center">
                <div className="bg-blue-400 w-full h-[300px] m-5 rounded-lg hover:shadow-3xl  transition hover:scale-90 delay-200 duration-600 ease-in-out border-none hover:cursor-pointer hover:bg-blue-500 ">
                    <div className="w-full">we</div>
                </div>
                </div>
                <div className="w-full flex justify-center items-center">
                <div className="bg-blue-400 w-full h-[300px] m-5 rounded-lg hover:shadow-3xl  transition hover:scale-90 delay-200 duration-600 ease-in-out border-none hover:cursor-pointer hover:bg-blue-500 ">
                    <div className="w-full">we</div>
                </div>
                </div>

            </div>
        </div>
    </div>


  )
  
}

