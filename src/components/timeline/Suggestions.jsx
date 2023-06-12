import React from 'react'
import './Suggestions.css'
import {Avatar} from "@mui/material";

const Suggestions = () => {
  return (
    <div className='suggestions'>
      <div className="suggestions__title">
        Suggestions for you
      </div>
    <div className="suggestions__usernames">


      <div className="suggestion_username">
        <div className="username__left">
          <span className='avatar'>
            <Avatar>F</Avatar>
          </span>
          <div className="username__info">
            <span className='username'>filmzoya__</span>
            <span className="relation">Suggested for you</span>
          </div>

        </div>
          <button className="follow__button">Follow</button>
        
      </div>

      <div className="suggestion_username">
        <div className="username__left">
          <span className='avatar'>
            <Avatar>C</Avatar>
          </span>
          <div className="username__info">
            <span className='username'>cineharmon</span>
            <span className="relation">New to Instagram</span>
          </div>

        </div>
          <button className="follow__button">Follow</button>
        
      </div>

      <div className="suggestion_username">
        <div className="username__left">
          <span className='avatar'>
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className='username'>rosefin_</span>
            <span className="relation">From your contacts</span>
          </div>

        </div>
          <button className="follow__button">Follow</button>
        
      </div>

      <div className="suggestion_username">
        <div className="username__left">
          <span className='avatar'>
            <Avatar>A</Avatar>
          </span>
          <div className="username__info">
            <span className='username'>aiivrinqtapes</span>
            <span className="relation">Suggested for you</span>
          </div>

        </div>
          <button className="follow__button">Follow</button>
        
      </div>
    </div>
    
    
    </div>
  )
}

export default Suggestions
