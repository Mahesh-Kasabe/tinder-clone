import React from 'react'
import Profile from "@material-ui/icons/PersonOutlined"
import Logout from "@material-ui/icons/ExitToAppRounded"
import IconButton from '@material-ui/core/IconButton'
import "./header.css"
import logo from "../../../logo.png"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  let naviagate = useNavigate();
  
  return (
    <div className='header'>
        <IconButton className='profile' onClick={() => {naviagate("/home")}} >
        <Profile fontSize='large' />
        </IconButton>
        
        <IconButton className='logo'>
        <img src={logo} />
        </IconButton>

        <IconButton className='logout' >
        <Logout fontSize='large' />
        </IconButton>
    </div>
  )
}

export default Header