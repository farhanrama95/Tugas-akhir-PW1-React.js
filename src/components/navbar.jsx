import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992); // breakpoint 'lg' Bootstrap

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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
              <motion.a
                whileHover={{ scale: isMobile ? 1 : 1.3 }}
                style={{ transformOrigin: 'right center' }}
                className="nav-link"
                href="#home"
              >
                Home
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a  whileHover={{ scale: isMobile ? 1 : 1.3 }}
                style={{ transformOrigin: 'right center' }} className="nav-link" href="#gallery">
                Gallery
              </motion.a>
            </li>
            <li>
                <motion.a whileHover={{ scale: isMobile ? 1 : 1.3 }}
                style={{ transformOrigin: 'right center' }} className="nav-link" href="#about">
                    About
                </motion.a>
            </li>

            {/* Dropdown Services */}
            <li className="nav-item dropdown">
              
               <motion.a 
                whileHover={{ scale: isMobile ? 1 : 1.3 }}
                style={{ transformOrigin: 'right center' }}
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </motion.a>
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
              <motion.a whileHover={{ scale: isMobile ? 1 : 1.3 }}
                style={{ transformOrigin: 'right center' }} className="nav-link" href="#faq">
                FaQ
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar