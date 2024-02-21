import { Link } from 'react-router-dom'
import menu from '../../assets/pdf/PubZero Menu.pdf'
const HeroSection = () => {
  return (
    <>
      <div id="background">
        <div id="overlay"></div>
        <div id="logo" className="d-flex flex-column align-items-center">
          <img src="src\assets\logo_trial-removebg-preview.png" alt="logo" />
          <Link
            className="rounded-0 nav-link bg-transparent text-primary fs-5 border border-secondary border-4 mt-3 px-3"
            target="_blank"
            to={menu}
          >
            <p className="m-0">Our Menu</p>
          </Link>
        </div>
      </div>
    </>
  )
}
export default HeroSection
