import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = ()=>(
  <div>
    <div className="logo__mobile">
      <span  className="logo__name">Dra. Faviola Sanchez</span>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end menu" id="navbarSupportedContent">
        <div className="logo">
          <span className="logo__name">Dra. Faviola Sanchez</span>
        </div>
        <ul className="navbar-nav nav">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/aboutme" className="nav-link">¿Quien Soy?</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">Servicios</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/testimonial" className="nav-link">Testimonios</NavLink>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header;
