import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary shadow fixed-top'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          Contact Book
        </Link>
        <div className='d-flex'>
          <Link to='/contacts/add' className='btn btn-dark text-light'>
            Add Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
