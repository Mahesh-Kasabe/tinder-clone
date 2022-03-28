import React from 'react'
import "./navbar.css"
import bg from "../../../bg.png"
import logo from "../../../main.png"

const Navbar = () => {
  return (  
      <div className='navbar' >
      
      <div className='image'>
          <img src={bg} />
        </div>

        <div className='nav'>
          <img src={logo} />
          <p>Products</p>
          <p>Learn</p>
          <p>Safty</p>
          <p>Support</p>
          <p>Download</p>

          <div className='buttons'>
          <p> ENGLISH (UK) </p>
          <button>Log in</button>
          </div>

          
          
        </div>

        <div className='join'>
        <p> Start something epic </p>
        <button>Create Account </button>
        </div>
      </div>
  )
}

export default Navbar