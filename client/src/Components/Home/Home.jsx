import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className="profile">

        <div className='border' >
        <img src={localStorage.getItem("photo")} />
        <p>{localStorage.getItem("name")}, 23 </p>
        <p>Cooking, Cricket, Reading </p>
        </div>

        

    </div>
  )
}

export default Home