import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <header class="header">
        <nav>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
            </ul>
        </nav>
        <a href="#" class="btn"><button>Contacto</button></a>
    </header>
    </div>
  )
}

export default Navbar