import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
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
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>

            {/* Dropdown Services */}
            <li className="nav-item dropdown">
              
              <a className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
              
                Services
              </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                        <a className="dropdown-item" href="#">
                            Web Design
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                        Development
                        </a>
                        </li>
                        <li>
                        <hr className="dropdown-divider" />
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Consulting
                        </a>
                        </li>
                </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
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