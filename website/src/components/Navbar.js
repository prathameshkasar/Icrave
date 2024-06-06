import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-primary py-3 sticky-top">
      <div className="container">
        <div>
          <h3 className="text-white">ICrave Creations<span className="ms-2" style={{ fontSize: '13px' }}>IT Solutions & Services</span></h3>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#services">Our Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#contact">Contact Us</a>
          </li>
          <li className="nav-item ms-2">
            <a className="btn btn-primary bg-white text-primary" href="#subscribe">Subscribe Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
