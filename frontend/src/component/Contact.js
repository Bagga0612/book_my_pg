import React from 'react'
import './CSS/contact.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <div className='contact'>
        <h1 className='heading1'>It's easy to find us...</h1>
        <p className='detail'>Please Feel Free to Contact us for any PG Booking related Issues, Complaints and for any support needed for moving to the PG you have Booked through us.</p>

        <Container>
          <Row>
            <Col md={5}>
              <LocationOnIcon color='primary' fontSize='large' />
              <h6 className='head'>ADDRESS</h6>
              <p className='infoDetail1'>9-20, Bethel Nagar St, Industrial Estate, Perungudi, Chennai, Tamil Nadu 600096, India</p>
              <br></br>
              <CallIcon color='primary' fontSize='large' />
              <h6 className='head'>PHONE</h6>
              <p className='infoDetail1'>+91-8939654691</p>
              <br></br>
              <EmailRoundedIcon color='primary' fontSize='large' />
              <h6 className='head'>EMAIL</h6>
              <p className='infoDetail1'>info@bookmypg.co.in</p>
            </Col>

            <Col md={1}>
              <span></span>
            </Col>
            <Col md={6}>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className='label'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className='label'>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className='label'>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter your mobile" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className='label'>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label className='label'>Enquiry Type</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>---Select---</option>
                    <option>Pg Booking</option>
                    <option>Customer Service</option>
                    <option>Complaints</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label className='label'>Message</Form.Label>
                  <Form.Control as="textarea" placeholder='Enter your message' />
                </Form.Group>

                <Button className='button' variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Contact