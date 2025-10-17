import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="nav neon-nav">
      <div className="nav-inner container">
        <Link to="/" className="brand">
          <span className="brand-accent">Groovo</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/home" className="nav-link">Home</NavLink>
          <NavLink to="/profile" className="nav-link">Profile</NavLink>
          <NavLink to="/login" className="nav-link btn-ghost">Login</NavLink>
        </div>
      </div>
    </nav>
  )
}
