import { React, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './CSS/about.css'
import about from './images/about01.jpg'
import about02 from './images/about02.jpg'
import Footer from './Footer'



const boxVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0, },
}

const About = () => {


  const control = useAnimation();
  const [ref, inView] = useInView();
  const [reff, inVieww] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    if (inVieww) {
      control.start("visible");
    }
  }, [control, inView, inVieww]);




  return (
    <div 
    // ref={ref}
    // variants={boxVariant}
    // initial="hidden"
    // animate={control}
    >
      <div className='about'>
        <h1 className='heading1'>About Us...</h1>
        <p className='detail1'>Book My PG is a technology-based platform for Booking PG, Serviced Apartments, Shared Flat and Rooms by Location with Specific requirement by filtering by Location, IT Parks, Land Mark, Price, Room type, Amenities, Gender and Food. Presently we have Launched in Platform in Chennai, Coimbatore and Bangalore. We will soon expand to all the Major Cities of the Country.</p>

        <Container className='container'>
          <Row>
            <Col md={6}>
              <img className='aboutImg' src={about} />
            </Col>
            <Col>
              <h3 className='heading'>Who we are?</h3>
              <p className='detail'>We are a set of well-selected and chosen Paying Guest services. This is a platform where those, who are willing to open their homes to guests, meet the people looking for wonderful homes to stay in and not have to look for hotels or favors in any city for their long stays. We ensure the places listed and the people looking for a stay are selected based on careful filtering criteria so that both parties benefit and the safety of all involved persons is ensured. We know how important a safe home is to you at both ends of the deal and that is a promise we make.</p>
            </Col>
          </Row>
        </Container>


        <Container className='container'>
          <Row>
            <Col md={6}>
              <h3 className='heading'>What we do?</h3>
              <p className='detail'>We put together a list of places where our guests can stay as a PG. This is done based on listings on our site by homeowners. We ensure that not only are they a safe home for the guest but the guest too is safe for them. These places can be searched based on locality, budget, need, and multiple other filters. Find the perfect PG stay or guest with us.<br></br><br></br>

                To meet our aim, we eliminate the two major problems a guest or host may face. The first of these is a lack of information for anyone new in a city. Our site will list all the information you can seek not just about the house and homeowners but also the locality and other aspects. The other is the loss of capital to a host when a paying guest leaves. We do not wish our homeowners and makers to lose money waiting for the next stroke of luck and therefore listing with us helps them find a guest sooner.</p>
            </Col>
            <Col md={6}>
              <img className='aboutImg1' src={about02} />
            </Col>
          </Row>
        </Container>


        <h3 className='heading'>What are we aiming at?</h3>
        <p className='detail1'>Our aim and motto are simple and singular. To provide the guests with a PG that feels like home best fitting their needs and the homeowners a guest who fits right in. To attain this we work with homeowners and guests to give everyone involved the best possible experience.<br></br>


          Our method of arriving at this involves detailed verification of all parties, a good database of homes and guests and being updated in real-time ensuring there is no problem for either party to find the right person/ home sitting where they are from their systems.
          <br></br>

          So come together home makers/ owners and guests to find what you seek. We hope we will be able to give you what you seek with us. We hope to make the PG community a secure one where all people get the best out of the system.</p>
      </div>
      <Footer />
    </div>
  )
}

export default About