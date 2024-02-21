import { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
import ContactsPageHeroSection from '../ContactsPageHeroSection/ContactsPageHeroSection'
import './Contacts.css'
import { Col, Container, Row } from 'react-bootstrap'

const Contacts = () => {
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
          <ContactsPageHeroSection />
          <Container className="text-tertiary">
            <Row className="my-5 justify-content-center justify-content-xxl-between">
              <Col
                xs={11}
                xxl={6}
                className="text-start fs-3 border border-5 lorem-info p-5"
              >
                <p className="display-6">Lorem ipsum dolor sit</p>
                <p>Lorem ipsum dolor sit</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi harum maxime error ipsam perspiciatis.
                </p>
              </Col>
              <Col xs={11} xxl={6} className="fs-3 timetables p-5">
                <p className="display-6">Open every Day</p>
                <div className="text-start">
                  <p>Mon – Thur: 7:30pm – 12am</p>
                  <p>Fri: 7:30pm – 2am</p>
                  <p>Sat: 7:30pm – 2am</p>
                  <p>Sun 7:30pm – 12am</p>
                </div>
              </Col>
            </Row>
            <Row className="my-5 justify-content-center justify-content-xxl-between">
              <Col
                xs={11}
                xxl={6}
                className="text-start fs-3 border border-5 p-5 contact-info"
              >
                <p className="display-6">Contact</p>
                <p>
                  <a
                    href="mailto:pubzero@info.com"
                    className="text-decoration-none"
                  >
                    pubzero@info.com
                  </a>
                </p>
                <p>
                  <a href="tel:+123456789" className="text-decoration-none">
                    Spoleto: 123456789
                  </a>
                </p>
                <p>
                  <a href="tel:+123456789" className="text-decoration-none">
                    Foligno: 123456789
                  </a>
                </p>
                <p>
                  <a href="tel:+123456789" className="text-decoration-none">
                    Roma: 123456789
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
          <div className="display-5 border-top border-5 py-2 text-tertiary">
            <p>Spoleto</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183.1608824154279!2d12.73722233670873!3d42.73390405094317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ef4f548acb00d%3A0xdbf9f151a0b5b2a6!2sBar%20Antico%20Caff%C3%A8!5e0!3m2!1sit!2sit!4v1708439555812!5m2!1sit!2sit"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          <div className="display-5 border-top border-5 py-2 text-tertiary my-5">
            <p>Foligno</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.074102772528!2d12.6993417765266!3d42.95564279726629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132e85c52b7dedd1%3A0xd31f0c864286e4ef!2sFour%20Rooms%20Bistrot!5e0!3m2!1sit!2sit!4v1708440202474!5m2!1sit!2sit"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          <div className="display-5 border-top border-5 py-2 text-tertiary">
            <p>Roma</p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.159001653538!2d12.498297476484375!3d41.88943746470361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b92c4a8959%3A0xca41c2fdbfbdf54!2sThe%20Race%20Club%20Roma%20Speakeasy%20-%20Cocktail%20Bar%20-!5e0!3m2!1sit!2sit!4v1708440086458!5m2!1sit!2sit"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </>
      )}
    </>
  )
}

export default Contacts
