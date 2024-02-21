import './MyFooter.css'
import { Link, useLocation } from 'react-router-dom'

const MyFooter = () => {
  const location = useLocation()

  return (
    <>
      <footer className="d-flex flex-wrap justify-content-evenly border-top align-items-center py-3 fs-5 bg-dark">
        <p className="col-md-4 mb-0 text-primary">
          &copy; {new Date().getFullYear()} PubZero
        </p>

        <img src="src\assets\logo.png" alt="logo" />

        <ul className="nav col-md-4 justify-content-end d-none d-md-flex">
          <li className="nav-item">
            <Link
              to={'/'}
              className={`nav-link px-2  ${
                location.pathname === '/'
                  ? 'active fw-bold text-secondary'
                  : 'text-primary'
              }`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={'/About'}
              className={`nav-link px-2  ${
                location.pathname === '/About'
                  ? 'active fw-bold text-secondary'
                  : 'text-primary'
              }`}
            >
              About
            </Link>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default MyFooter
