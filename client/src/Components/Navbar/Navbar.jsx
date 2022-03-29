import React from 'react'
import "./navbar.css"
import bg from "../../../bg.png"
import logo from "../../../main.png"
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let Navigate = useNavigate();

  const signinwithgoogle = () => {
    signInWithPopup(auth,provider).then((result) => {
      const photo = result.user.photoURL;
      const name = result.user.displayName;
      localStorage.setItem("photo", photo);
      localStorage.setItem("name", name);
      Navigate("/home")
    })
  }

  return (  
      <div className='navbar' >
      
      <div className='image'>
          <img src={bg} />
        </div>

        <div className='nav'>
          <img src={logo} />
          <p>Products</p>
          <p>Learn</p>
          <p>Safety</p>
          <p>Support</p>
          <p>Download</p>

          <div className='buttons'>
          <p> ENGLISH (UK) </p>
          <button onClick={signinwithgoogle} >Log in</button>
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