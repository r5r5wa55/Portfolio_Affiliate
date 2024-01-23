import { MdMiscellaneousServices } from "react-icons/md";


export default function Connect() {
  return (
    <div>
        <div className='bg-wecolor h-60 flex flex-col justify-center items-center'>
            <h2 className='font-bold text-2xl mb-5'>Connect</h2>
            <h1 className='xl:text-6xl md:text-4xl sm:text-3xl font-bold text-blue-400 m-0 flex text-xl'>ความคิดเห็น<div className="mx-5 text-red-400">&</div>ช่องทางการติดต่อ</h1>
        </div>

        <div className="mb-10">
            <div className="lg:h-[570px]  md:h-full xl:h-[570px]  h-full w-full mb-10  flex justify-center">
                <div className="bg-gray-800  w-10/12 sm:w-10/12 md:w-9/12 lg:w-10/12 xl:w-8/12 h-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 rounded-xl">
                <div className="text-white bg-gray-700 xl:rounded-l-xl lg:rounded-l-xl md:rounded-l-xl sm:rounded-l-xl rounded-xl">  
                    <h2 className="m-10 text-4xl font-bold">ความคิดเห็น</h2>
                    <div className="w-full flex items-center justify-center">
                        <input type="text" name="" id="" className="text-white outline-0 bg bg-gray-700 border-b-2 w-4/6 my-4 text-xl p-1" placeholder="ชื่อ"></input>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <input type="email" name="" id="" className="text-white outline-0 bg bg-gray-700 border-b-2 w-4/6 my-4 text-xl p-1" placeholder="E-mail ติดต่อ" ></input>
                    </div>
                    <div className="w-full flex items-center justify-center"> 
                        <input type="text" name="" id="" className="text-white outline-0 bg bg-gray-700 border-b-2 w-4/6 my-4 text-xl p-1" placeholder="" ></input>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <textarea type="text" name="" id="" className="text-black outline-0 bg border-2 w-4/6 my-10 text-2xl pb-16 font-semibold rounded-lg" placeholder="ข้อเสนอแนะ"  ></textarea>
                    </div>

                </div>
           
                <div className="text-white bg-gray-800 xl:rounded-l-xl lg:rounded-l-xl md:rounded-l-xl sm:rounded-l-xl rounded-xl">  
                    <h2 className="mt-10 ml-10 text-4xl font-bold">ช่องทางการติดต่อ</h2>
                    <h2 className=" ml-16 text-xl ">ความคิดเห็น</h2>
                    <div className="mt-10 ml-10">
                        <div className="flex mt-10 items-center">
                            <div className="bg-slate-700 h-[50px] w-[50px] flex items-center justify-center mr-3 rounded-full">
                                <MdMiscellaneousServices className="text-3xl  "/>
                            </div>
                            <div className="">
                                <h1 htmlFor="" className="text-xl ">Address :</h1>
                                <h1 htmlFor="" className="text-md ml-10 ">weraol</h1>
                            </div>
                           
                        </div>
                        <div className="flex mt-10 items-center">
                            <div className="bg-slate-700 h-[50px] w-[50px] flex items-center justify-center mr-3 rounded-full">
                                <MdMiscellaneousServices className="text-3xl  "/>
                            </div>
                            <div className="">
                                <h1 htmlFor="" className="text-xl ">Phone :</h1>
                                <h1 htmlFor="" className="text-md ml-10 ">064-451-0578</h1>
                            </div>
                        </div>
                        <div className="flex mt-10 items-center">
                            <div className="bg-slate-700 h-[50px] w-[50px] flex items-center justify-center mr-3 rounded-full">
                                <MdMiscellaneousServices className="text-3xl "/>
                            </div>
                            <div className="">
                                <h1 htmlFor="" className="text-xl ">E-mail :</h1>
                                <h1 htmlFor="" className="text-md ml-10 ">werapol_jaranai@hotmail.com</h1>
                            </div>
                        </div>
                        <div className="flex mt-10 items-center">
                            <div className="bg-slate-700 h-[50px] w-[50px] flex items-center justify-center mr-3 rounded-full">
                                <MdMiscellaneousServices className="text-3xl  "/>
                            </div>
                            <div className="">
                                <h1 htmlFor="" className="text-xl ">Website :</h1>
                                <h1 htmlFor="" className="text-md ml-10 ">weraol</h1>
                            </div>
                        </div>
                    </div>
                    
                 
            

                </div>

                </div>

            </div>
        </div>
    </div>
  )
}
