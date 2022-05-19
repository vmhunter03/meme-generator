import React from 'react'
import img from '../images/Troll Face.png'
export default function Header() {
  return (
    <div className='container-header'>
        <img src={img} alt="" className="header__image" />
        <h1 className="header__title">Meme Generator</h1>
        <h4 className='header__project'>React Course - Project 3</h4>
    </div>
  )
}
