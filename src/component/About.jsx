// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function About() {
  return (
    <div>
        <div className="bg-wecolor h-60 flex flex-col justify-center items-center">
            <h2 className='font-bold text-2xl'>HOME.ABOUT</h2>
            <h1 className='text-6xl font-bold text-blue-400 m-0'>About Us</h1>
        </div>

       <div className="lg:h-[570px] md:h-[570px] xl:h-[570px] grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 h-full">
        <div className="w-full flex flex-col items-center">
          <div className="w-4/5 ">
            <h1 className='font-bold text-4xl my-5'>ABOUT MYSELF</h1>
            <h2 className='xl:w-5/6 md:w-full'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dolorem eius minus iure, ex consequuntur voluptas ab, dolores totam harum necessitatibus ipsa vitae possimus sunt amet in voluptates quia facere vero enim laborum laboriosam. Eius eos distinctio laboriosam optio sit aliquam beatae dolor reprehenderit maiores nostrum facilis explicabo, cumque facere doloribus consequatur inventore? Quod magni voluptates ipsa modi totam saepe!</h2>
          </div>
          <div className="my-5 w-full flex justify-center ">
            <div className="flex justify-between w-4/5 flex-col lg:flex-row md:flex-row">
              <div className="xl:p-20 md:p-10 sm:p-16 p-16 mb-10 border border-slate-300 rounded-xl">we1</div>
              <div className="xl:p-20 md:p-10 sm:p-16 p-16 mb-10 border border-slate-300 rounded-xl">we2</div>
              <div className="xl:p-20 md:p-10 sm:p-16 p-16 mb-10 border border-slate-300 rounded-xl">we3</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-5">
          <div className="w-4/5">
            <div className="font-bold text-3xl">อุปนิสัย</div>
            <div className="font-thin xl:text-xl w-full text-gray-400 mt-4 text-lg">การสื่อสาร</div>
            <div className="border-2  border-slate-500  p-1 my-2 rounded-xl hover:cursor-pointer  hover:scale-110 transition  delay-200 duration-400 ease-in-out ">
              <div className="w-7/12 bg-sky-400 p-1 rounded-xl"></div>
            </div>
            <div className="font-thin xl:text-xl w-full text-gray-400 mt-4 text-lg">ทัศนคติเชิงบวก</div>
            <div className="border-2  border-slate-500  p-1 my-2 rounded-xl">
              <div className="w-12/12 bg-sky-400 p-1 rounded-xl"></div>
            </div>
            <div className="font-thin xl:text-xl w-full text-gray-400 mt-4 text-lg truncate ... hover:text-clip">การจัดการกสถานการณ์ และ การเปิดรับโอกาสใหม่ ๆ</div>
            <div className="border-2  border-slate-500  p-1 my-2 rounded-xl">
              <div className="w-9/12 bg-sky-400 p-1 rounded-xl"></div>
            </div>
            <div className="font-thin xl:text-xl w-full text-gray-400 mt-4 text-lg">การทำงานเป็นทีม การปรับตัว</div>
            <div className="border-2  border-slate-500  p-1 my-2 rounded-xl">
              <div className="w-7/12 bg-sky-400 p-1 rounded-xl"></div>
            </div>
            <div className="font-thin text-xl w-full text-gray-400 mt-4">ความรับผิดชอบ </div>
            <div className="border-2  border-slate-500  p-1 my-2 rounded-xl">
              <div className="w-11/12 bg-sky-400 p-1 rounded-xl"></div>
            </div>
            <div className="font-thin text-xl w-full text-gray-400 mt-4">ความคิดสร้างสรรค์</div>
            <div className="border-2  border-slate-500  p-1 my-2 rounded-xl mb-10">
              <div className="w-10/12 bg-sky-400 p-1 rounded-xl"></div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}
