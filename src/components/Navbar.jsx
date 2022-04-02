import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='d-flex flex-row'>
      <Link className="navbar-brand nav-link" to="/">Home</Link>
        <Link className="navbar-brand nav-link" to="/formularios">Formularios</Link>
        <Link className="navbar-brand nav-link" to="/historial">Historial</Link>
      </div>
       
       
    </nav>
  )
}

export default Navbar