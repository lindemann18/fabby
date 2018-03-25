import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>(
  <nav className="navbar navbar-expand-lg navbar-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end menu" id="navbarSupportedContent">
      <div className="logo">
        <Link to="/" className="logo__name">Dra. Faviola Sanchez</Link>
      </div>
      <ul className="navbar-nav nav">
        <li className="nav-item active">
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutme" className="nav-link">¿Quien Soy?</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Servicios</Link>
        </li>

        <li className="nav-item">
          <Link to="/testimonial" className="nav-link">Testimonios</Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link">Contacto</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header;
