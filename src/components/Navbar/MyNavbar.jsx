import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import menu from '../../assets/pdf/PubZero Menu.pdf'
import './MyNavbar.css'

const MyNavbar = () => {
  const location = useLocation()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="justify-content-end justify-content-sm-center">
          <Nav className="align-items-center fs-5 ">
            <Link
              className={`nav-link text-primary d-none d-sm-inline ${
                location.pathname === '/'
                  ? 'active fw-bold text-secondary'
                  : 'text-primary'
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`nav-link text-primary d-none d-sm-inline ${
                location.pathname === '/About'
                  ? 'active fw-bold text-secondary '
                  : 'text-primary'
              }`}
              to="/About"
            >
              About
            </Link>
            <Link to={''} className="central-logo">
              <img src="src\assets\logo.png" alt="logo" />
            </Link>
            <Link
              className="nav-link text-primary d-none d-sm-inline"
              target="_blank"
              to={menu}
            >
              Menu
            </Link>
            <Link
              className={`nav-link text-primary d-none d-sm-inline ${
                location.pathname === '/Contacts'
                  ? 'active fw-bold text-secondary'
                  : 'text-primary'
              }`}
              to="/Contacts"
            >
              Contacts
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar
