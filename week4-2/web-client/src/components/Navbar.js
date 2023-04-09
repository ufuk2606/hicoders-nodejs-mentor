import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='container-fluid navbar'>
      <div className='container links d-flex justify-content-start' data-testid='navbar'>
      <NavLink className="menu" to='/'>Bloggy</NavLink> 
      <NavLink className="menu" to='/'>Home</NavLink>
      <NavLink className="menu" to='/posts'>Posts</NavLink>
      <NavLink className="menu" to='/create'>Create</NavLink>
      </div>
    </div>
  )
}

export default Navbar