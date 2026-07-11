import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup: hapus listener saat komponen unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark sticky-top ${
        scrolled ? 'bg-dark shadow' : 'bg-dark'
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#home">
          My Website
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Gallery
              </a>
            </li>

            {/* Dropdown Services */}
            <li className="nav-item dropdown">
              
              <a  className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#web-design">
                    Web Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#development">
                    Development
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#consulting">
                    Consulting
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FaQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar