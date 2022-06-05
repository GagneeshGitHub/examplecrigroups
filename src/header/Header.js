import React from 'react'
import './file.css'
import logo from '../asserts/logo.png'

export default function Header() {
  return (
    <div className='header' alt='logoimage'>
        <img src={logo}/>
    </div>
  )
}
