import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const NavForm = () => {
  return (
    <nav className='navbar d-flex justify-content-center'>
      <div className='d-flex'>
        <Link className="nav-link" to="/form/factura"><h4><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> Facturas</h4></Link>
        <Link className='nav-link ' to="/form/volante"><h4><FontAwesomeIcon icon={faDolly}></FontAwesomeIcon> Volantes</h4></Link>
      </div>
       
       
    </nav>
  )
}

export default NavForm