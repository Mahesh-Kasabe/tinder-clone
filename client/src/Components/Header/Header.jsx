import React from 'react'
import Profile from "@material-ui/icons/PersonOutlined"
import Logout from "@material-ui/icons/ExitToAppRounded"
import IconButton from '@material-ui/core/IconButton'
import "./header.css"
import logo from "../../../logo.png"
import { useNavigate } from 'react-router-dom'
import { auth, provider } from "../../firebase-config";
import { signOut } from "firebase/auth";



const Header = () => {
  let Navigate = useNavigate();  

  const signout = () => {
    signOut(auth,provider).then((result) => {
      localStorage.setItem("photo", "");
      localStorage.setItem("name", "");
      Navigate("/")
    })}
  
  return (
    <div className='header'>
        <IconButton className='profile' href={"/profile"}>
        <Profile fontSize='large' />
        </IconButton>
        
        <IconButton className='logo' href={"/home"}>
        <img src={logo} />
        </IconButton>

        <IconButton className='logout' onClick={signout} >
        <Logout fontSize='large' />
        </IconButton>
    </div>
  )
}

export default Header