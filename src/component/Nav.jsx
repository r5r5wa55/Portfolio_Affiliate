// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome,AiFillFormatPainter } from "react-icons/ai";
import { BiUserPin,BiSolidMap} from "react-icons/bi";
import { MdMiscellaneousServices } from "react-icons/md";
import '../component/nav.css'

export default function Nav() {
  return (
    <>
        <div className="hearder_container">
            <div className="hearder_box">
                <ul>
                    <li><Link className='list' to='/'><AiFillHome /></Link></li>
                    <li><Link className='list' to='/about'><BiUserPin  /></Link></li>
                    <li><Link className='list' to='/project'><AiFillFormatPainter   /></Link></li>
                    <li><Link className='list' to='/service'><MdMiscellaneousServices /></Link></li>
                    <li><Link className='list' to='/content'><BiSolidMap /></Link></li>
                </ul>
            </div>
        </div>

    </>
  )
}
