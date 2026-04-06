import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <a className="navbar-brand" href="#">Employee Management System</a>
        <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className='nav-link' to='/employees'>Empoyee</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' to='/department'>Departments</NavLink>
        </li>
        </ul>
    </div>

      </nav>
    </div>
  )
}

export default HeaderComponent
