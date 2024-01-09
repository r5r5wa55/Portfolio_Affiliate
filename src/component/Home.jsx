// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../component/home.css'

export default function Home() {
  return (
    <div>
      <div className="container-home">
        <div className="left-img">
          <img className='img-we' src="../../public/image/102409147.jpg" alt="" />
        </div>
        <div className="right-text">
          <h2>This is Me</h2>
          <h1>Werapol Jaranai</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ea ex tenetur in reiciendis similique quas ad voluptate praesentium, consequuntur sequi, optio explicabo suscipit quisquam perferendis molestiae molestias. Quibusdam, asperiores.</p>
          <button className='btn-discover'>Discover Me</button>
        </div>
      </div>
    </div>
  )
}
