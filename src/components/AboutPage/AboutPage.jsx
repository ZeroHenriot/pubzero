import { Col, Container, Row } from 'react-bootstrap'
import './AboutPage.css'
import AboutPageHeroSection from '../AboutPageHeroSection/AboutPageHeroSection'
import menu from '../../assets/pdf/PubZero Menu.pdf'
import { Link } from 'react-router-dom'
import Address from '../Address/Address'
import { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'

const AboutPage = () => {
  const [loading, isLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      isLoading(false)
    }, 500)
  })

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <AboutPageHeroSection />
          <Container className="text-tertiary fs-5 text-start mt-5 py-5">
            <Row className="justify-content-center justify-content-lg-between">
              <Col xs={11} sm={12} lg={6} className="border border-5 p-5">
                <p>
                  Welcome to PubZero, your ultimate destination for a unique
                  combination of fun, games, and craft beer. Located in the
                  heart of the city, PubZero is more than just a bar – it's a
                  ludobar where friends come together to create unforgettable
                  moments.
                </p>
                <p>
                  At PubZero, we invite you to dive into our wide selection of
                  craft beers from local and international breweries while
                  enjoying the company of your friends and colleagues playing
                  our curated selection of tabletop games. Whether you're a
                  tabletop gaming expert or a curious beginner, there's
                  something for everyone at PubZero.
                </p>
              </Col>
              <Col
                xs={11}
                sm={12}
                lg={6}
                className="position-relative d-flex align-items-end p-0 justify-content-start justify-content-lg-start"
              >
                <div
                  id="boh"
                  className="p-5 d-flex flex-column justify-content-between align-items-end ms-5"
                >
                  <p className="display-5 text-secondary text-end">
                    A Full Pub in the heart of Italy
                  </p>
                  <Link
                    className="nav-link fs-4 mt-3 px-3 py-2"
                    id="menu-btn-about"
                    target="_blank"
                    to={menu}
                  >
                    <p className="m-0">Our Menu</p>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row
              className="justify-content-sm-end justify-content-center justify-content-lg-between align-items-center "
              id="second-row"
            >
              <Col
                xs={11}
                sm={12}
                lg={6}
                className="position-relative p-0 d-flex align-items-center justify-content-end border border-5 boh2"
              >
                <img src="src\assets\bar-33.jpg" alt="" />
              </Col>

              <Col
                xs={11}
                sm={12}
                lg={6}
                className="border border-5 p-5 second-description"
              >
                <p>
                  We take pride in offering a welcoming and friendly environment
                  where guests can relax, have fun, and create new memories. Our
                  team is always available to recommend the perfect beer to pair
                  with your favorite game or suggest a new game to try.
                </p>
                <p>
                  From competitive game nights to laid-back evenings among
                  friends, PubZero is the ideal place to combine a passion for
                  tabletop gaming with a love for craft beer. We look forward to
                  welcoming you for a unique experience you won't soon forget!
                </p>
              </Col>
            </Row>
          </Container>
          <div className="border-top">
            <Address />
          </div>
        </>
      )}
    </>
  )
}

export default AboutPage
