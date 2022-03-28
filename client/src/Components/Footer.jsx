import React from 'react'
import CloseIcon from "@material-ui/icons/Close"
import ReplayIcon from "@material-ui/icons/Replay"
import LikeIcon from "@material-ui/icons/StarRate"
import FavouriteIcon from "@material-ui/icons/Favorite"
import FlashIcon from "@material-ui/icons/FlashOn"
import IconButton from "@material-ui/core/IconButton"
import "./tinder.css"

const Footer = () => {
  return (
    <div className='footer'>
        <IconButton className='close'>
        <CloseIcon fontSize='large' />
        </IconButton>

        <IconButton className='replay'>
        <ReplayIcon fontSize='large' />
        </IconButton>
        
        <IconButton className='like'>
        <LikeIcon fontSize='large' />
        </IconButton>

        <IconButton className='fav'>
        <FavouriteIcon fontSize='large' />
        </IconButton>

        <IconButton className='flash'> 
        <FlashIcon fontSize='large' />
        </IconButton>
        
         
    </div>
  )
}

export default Footer