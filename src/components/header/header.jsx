import React from 'react'

import './Header.scss'
import logo from '../../pictures/logo.svg'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo"></img>
    </div>
  )
}

export default Header
