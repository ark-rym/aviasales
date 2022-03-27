import React from 'react'

import './header.scss'
import logo from '../../pictures/logo.svg'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo"></img>
    </div>
  )
}

export default Header
