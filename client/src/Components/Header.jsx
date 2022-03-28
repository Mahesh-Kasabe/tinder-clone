import React from 'react'
import Profile from "@material-ui/icons/PersonOutlined"
import Logout from "@material-ui/icons/ExitToAppRounded"
import IconButton from '@material-ui/core/IconButton'
import "./header.css"
import logo from "../../logo.png"

const Header = () => {
  return (
    <div className='header'>
        <IconButton className='profile' >
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