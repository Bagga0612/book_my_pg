import React from 'react';
import './CSS/footer.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from './images/logo1.jpg';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <div className='footer'>

      <Container className='container'>
        <Row>
          <Col md={4}>
            <img className='img' src={logo} /> <h5 className='site'>Book My PG</h5>
            <br></br>
            <br></br>
            <p className='detail'>Book My PG is India's Largest growing "PG Rental Network" attempting to provide better Paying Guest Accommodation Via our technology platform. We help find the best PG rental across Major Indian Cities.</p>
          </Col>
          <Col md={3}>
            <span></span>
          </Col>
          <Col>
            <h4 className='info'>CONTACT INFO</h4>
            <p className='infoDetail'> <LocationOnIcon />      9-20, Bethel Nagar St, Industrial Estate, Perungudi, Chennai, Tamil Nadu 600096, India</p>
            <p className='infoDetail'><CallIcon />   +91-0123456789</p>
            <p className='infoDetail'><EmailRoundedIcon />   info@bookmypg.co.in</p>
          </Col>
        </Row>
      </Container>







      <hr className='line'></hr>

      <Container className='container'>
        <Row>
          <Col>PG in Chennai</Col>
          <Col>PG Near Me</Col>
          <Col>Paying Guest accommodation in Chennai</Col>
        </Row>
        <Row>
          <Col>PG in Coimbatore</Col>
          <Col>Best PG in OMR</Col>
          <Col>PG near thoraipakkam | Perungudi | Sholinganallur</Col>
        </Row>
        <Row>
          <Col>PG in Bangalore</Col>
          <Col>Working Mens Hostel</Col>
          <Col>Furnished PG apartments for rent</Col>
        </Row> <Row>
          <Col>PG in Delhi</Col>
          <Col>PG accommodation for Women in Chennai</Col>
          <Col></Col>
        </Row>
      </Container>

      {/* <Container fluid="md"> 
        <Row>
          <Col sm={4}>PG in Chennai</Col>
          <Col sm={4}>PG Near Me</Col>
          <Col sm={4}>Paying Guest accommodation in Chennai</Col>
        </Row>
      </Container> */}
      <hr className='line'></hr>
      <p className='copyright'>Copyright 2019-2023 | Book My Pg Pvt Ltd | All Rights Reserved</p>

    </div>
  )
}

export default Footer