// eslint-disable-next-line no-unused-vars
import React from "react";

import { BsChevronRight } from "react-icons/bs";
import { CgFacebook ,CgGlobeAlt ,CgGoogle } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="bg-slate-800 font-serif flex justify-center">
      <div className="foter-container grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-0 text-white   w-10/12">
        <div className="about-con flex flex-col m-5">
          <h1 className="text-3xl font-bold mb-5">ABONT ME</h1>
          <p className="text-sm mb-5 text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium accusamus esse voluptas! Reiciendis numquam quis autem cumque unde, nisi corporis ipsum eveniet corrupti hic, aut dicta provident. Laudantium, quas voluptate?
          </p>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium accusamus esse voluptas! Reiciendis numquam quis autem cumque unde, nisi corporis ipsum eveniet corrupti hic, aut dicta provident. Laudantium, quas voluptate?
          </p>
        </div>
        <div className="newsletter m-5 text-sm">
          <h1 className="text-3xl font-bold mb-5 ">NEWSLETTER</h1>
          <p className="text-gray-400 mb-12">Lorem ipsum dolor, sit amet consectetur </p>
          <div className="flex w-full "> 
            <input type="text" className="block xl:w-full py-5 px-2 h-3  text-gray-900 border m-0 p-0 text-sm font-normal rounded-s-md md:w-96 sm:w-full xs:w-full "/>
            <button className="btn-go h-[41] bg-blue-500 rounded-e-md w-8 hover:bg-blue-700 delay-200 duration-400 ease-in-out" ><BsChevronRight className="text-xl font-bold  w-full"/></button>
          </div>
        </div>
        <div className="follow m-5 xl:col-span-1 md:col-span-2 ">
         
          <h1 className="text-3xl font-bold mb-5">FOLLOW ME</h1>
          <p className="text-gray-400 mb-5">Lorem ipsum dolor, sit amet consectetur </p>
    
            <div className="flex justify-around xl:w-8/12 md:w-5/12 text-3xl mt-10">
              <div className="xl:h-12   bg-blue-500 p-2 flex justify-center items-center rounded-full hover:bg-blue-600 hover:cursor-pointer hover:scale-125 transition  delay-200 duration-400 ease-in-out">
                <CgFacebook title="ช่องทางการสื่อสารทาง Facebook"/>
              </div>
              <div className="xl:h-12   bg-blue-500 p-2 flex justify-center items-center rounded-full hover:bg-blue-600 hover:cursor-pointer hover:scale-125 transition  delay-200 duration-400 ease-in-out ">
                <BsGithub title="Github" />
              </div>
              <div className="xl:h-12   bg-blue-500 p-2 flex justify-center items-center rounded-full  hover:bg-blue-600 hover:cursor-pointer hover:scale-125 transition  delay-200 duration-400 ease-in-out"> 
                <CgGoogle  title="Gmail"/>
              </div>
              <div className="xl:h-12   bg-blue-500 p-2 flex justify-center items-center rounded-full hover:bg-blue-600 hover:cursor-pointer hover:scale-125 transition  delay-200 duration-400 ease-in-out  ">  
                <CgGlobeAlt title="เว็บไซต์ที่เกี่ยวข้อง" />
              </div>
          
            </div>

        </div>
      </div>
    </div>
  );
}
