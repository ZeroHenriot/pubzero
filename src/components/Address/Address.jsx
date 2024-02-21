import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Address.css'

const Address = () => {
  return (
    <Row className="bg-dark text-primary fs-5 py-5 justify-content-center m-0">
      <Col
        xs={11}
        lg={3}
        className="collino justify-content-center align-items-center d-flex flex-column"
      >
        <p>- Spoleto -</p>
        <p className="m-0 text-nowrap">Piazza del Mercato, 2</p>
        <p>06049 Spoleto PG</p>
        <Link
          className="nav-link border border-2 GetPosition px-3 py-1"
          target="_blank"
          to="https://www.google.com/maps/place/Piazza+del+Mercato,+2,+06049+Spoleto+PG/@42.7339958,12.7345274,17z/data=!3m1!4b1!4m6!3m5!1s0x132ef4f547d7564f:0xa538f2b63e632e02!8m2!3d42.7339919!4d12.7371023!16s%2Fg%2F11csm5gqrw?entry=ttu"
        >
          Get Position
        </Link>
      </Col>
      <Col
        xs={11}
        lg={3}
        className="collino justify-content-center align-items-center d-flex flex-column"
      >
        <p>- Foligno -</p>
        <p className="m-0 text-nowrap">Via Antonio Gramsci, 49/51</p>
        <p>06034 Foligno PG</p>
        <Link
          className="nav-link border border-2 GetPosition px-3 py-1"
          target="_blank"
          to="https://www.google.com/maps/place/Four+Rooms+Bistrot/@42.9557389,12.7017678,21z/data=!4m6!3m5!1s0x132e85c52b7dedd1:0xd31f0c864286e4ef!8m2!3d42.9556389!4d12.7019167!16s%2Fg%2F11bwysjsdf?entry=ttu"
        >
          Get Position
        </Link>
      </Col>
      <Col
        xs={11}
        lg={3}
        className="collino justify-content-center align-items-center d-flex flex-column"
      >
        <p>- Roma -</p>
        <p className="m-0 text-nowrap">Via Labicana, 52</p>
        <p>00184 Roma RM</p>
        <Link
          className="nav-link border border-2 GetPosition px-3 py-1"
          target="_blank"
          to="https://www.google.com/maps/place/The+Race+Club+Roma+Speakeasy+-+Cocktail+Bar+-/@41.8894429,12.5007801,21z/data=!4m6!3m5!1s0x132f61b92c4a8959:0xca41c2fdbfbdf54!8m2!3d41.8894335!4d12.5008724!16s%2Fg%2F11bwnygxh5?entry=ttu"
        >
          Get Position
        </Link>
      </Col>
    </Row>
  )
}

export default Address
