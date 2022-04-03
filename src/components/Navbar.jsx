import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='d-flex flex-row'>
      <Link className="navbar-brand font-weight-bold nav-link" to="/">Inicio</Link>
        <Link className="font-weight-normal text-white nav-link" to="/formularios">Formularios</Link>
        <Link className="font-weight-normal text-white nav-link" to="/historial">Historial</Link>
      </div>
       
       
    </nav>
  )
}

export default Navbar