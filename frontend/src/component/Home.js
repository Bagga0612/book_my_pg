import { React, useEffect, useState } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Search from './Search'

import './CSS/home.css'
import bg from './images/bg1.jpg'
import about from './images/about.png'
import search from './images/s.jpg'
import mail from './images/mail.jpg'
import note from './images/note.jpg'
import pin from './images/pin.jpg'
import calendar from './images/calendar.jpg'
import tag from './images/tag.jpg'
import ac from './images/ac.jpg'
import balcony from './images/balcony.png'
import bed from './images/bed.png'
import tv from './images/tv1.png'
import geyser from './images/geyser.jpg'
import intercom from './images/intercom.png'
import locker from './images/locker.jpg'
import table from './images/table.jpg'
import wifi from './images/wifi.jpg'

import chennai from './images/Chennai.jpg'
import jaipur from './images/jaipur.jpg'
import kolkata from './images/kolkata.jpg'
import mumbai from './images/mumbai.jpg'
import delhi from './images/delhi.jpg'
import pune from './images/pune.jpg'
import Footer from './Footer'


const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0, scale: 0, x: 0 },
}

const Home = () => {

    const[darkMode , setDarkMode]=useState(false);
    const navigate = useNavigate();

    const gotoAbout = () => {
        navigate('/About');
    }

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
        else{
            control.start("hidden");
        }
    }, [control, inView]);


    const toggleDarkMode=()=>{
        setDarkMode((prevDarkMode)=> !prevDarkMode);
    }



    return (
        <div className='home'>
            <h1 className='main'>Book My PG</h1>
            <h6 className='mainBelow'>India's Largest PG Network to Book your PG Online</h6>
            <Search />
            <img className='bgimg' src={bg} />

            <div darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
            <Container className='homeabout'>
                <Row>
                    <Col md={6}>
                        <h2 className='head'>About Book My PG</h2>
                        <p className='headDetail'>We, at Book My PG, are India's fastest-growing network of managed Paying Guest (PG) rentals. We hope to provide you with the best renting solutions with the help of our designs and technology.Our services across the country will help you find and book Paying Guest (PG) rental homes.</p>
                        <Button className='headButton' size='lg' variant='outline-primary' onClick={gotoAbout}>Read More</Button>
                    </Col>
                    <Col md={4}>
                        <img className='imgage' src={about} />
                    </Col>
                </Row>
            </Container>
            </div>

            <div className='work'
                // ref={ref}
                // variants={boxVariant}
                // initial="hidden"
                // animate={control}
                >
                <h2 className='head'>How it's work</h2>
                <p className='headDetails'>Our process is simple and very different from those of others in this industry. The search process is streamlined by the locality or landmark of your choice. This allows you to find the right hostel or room. You can choose the subscription plan that best suits your needs.</p>
                <Container>
                    <Row>
                        <Col md={4}>
                            <img className='cardimg ' src={search} />
                            <h4 className='cardname'>Search</h4>
                            <p className='carddetail'>Fill the search fields like your locality,or city,boys pg or girls pg</p>
                        </Col>
                        <Col md={4}>
                            <img className='cardimg ' src={note} />
                            <h4 className='cardname'>Make Payment</h4>
                            <p className='carddetail'>Select your PG Rental Home,Sharing Type and make payment Online.</p>
                        </Col>
                        <Col md={4}>
                            <img className='cardimg ' src={mail} />
                            <h4 className='cardname'>Booking Confirmation</h4>
                            <p className='carddetail'>Your subscription and booking date confirmed.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='offer'
                // ref={ref}
                // variants={boxVariant}
                // initial="hidden"
                // animate={control}
            >
                <h2 className='head'>What We Offer</h2>
                <p className='headDetails'>The listed services are offered to all our customers. We assure you the best deals in all our properties and the chance to live a more luxurious life with lesser cost.</p>
                <Container>
                    <Row>
                        <Col md={4}>
                            <motion.img  className='cardimgage ' src={pin} />
                            <h4 className='cardname'>Find PGs Near You</h4>
                            <p className='carddetail'>Find Paying guests near you by selecting your location. We cover more than 50+ localities in every city.</p>
                        </Col>
                        <Col md={4}>
                            <img className='cardimgage ' src={calendar} />
                            <h4 className='cardname'>Book Online</h4>
                            <p className='carddetail'>Book your PG online through our web portal or mobile application. Avail discounts that are available for booking online.</p>
                        </Col>
                        <Col md={4}>
                            <img className='cardimgage ' src={tag} />
                            <h4 className='cardname'>Best Deals On PGs</h4>
                            <p className='carddetail'>We have tie ups with PGs in every city. We make sure that our customers get the best deals for PGs.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='work'>
                <h2 className='head'>Amenities List</h2>
                <p className='headDetails'>We provide all the amenities, some amenities are surely available for all our service places. Some of the items only you may get by request, Because that type of amenities are not mandatory.</p>
                <Container>
                    <Row >


                        {/* <Col style={{ backgroundColor: "white" }} className='d-flex align-items-center py-3' lg={4} pl={5}>
                            <Col> <img src={ac} height="80px" width="100px" /></Col>
                            <Col className=' align-items-center'>
                                <h5>Air Conditioner</h5>
                                <p>Surely Available</p>
                            </Col>
                        </Col>

                        <Col style={{ backgroundColor: "white" }} className='d-flex align-items-center py-3' lg={4} pl={5}>
                            <Col> <img src={ac} height="80px" width="100px" /></Col>
                            <Col className=' align-items-center'>
                                <h5>Air Conditioner</h5>
                                <p>Surely Available</p>
                            </Col>
                        </Col>

                        <Col style={{ backgroundColor: "white" }} className='d-flex align-items-center py-3' lg={4} pl={5}>
                            <Col> <img src={ac} height="80px" width="100px" /></Col>
                            <Col className=' align-items-center'>
                                <h5>Air Conditioner</h5>
                                <p>Surely Available</p>
                            </Col>
                        </Col>

                        <Col style={{ backgroundColor: "white" }} className='d-flex m-5 align-items-center py-3' lg={4} pl={5}>
                            <Col> <img src={ac} height="80px" width="100px" /></Col>
                            <Col className=' align-items-center'>
                                <h5>Air Conditioner</h5>
                                <p>Surely Available</p>
                            </Col>
                        </Col>





                        <Col style={{ background: "yellow" }} lg={4} pl={5}>2222</Col>

                        <Col style={{ background: "blue" }} lg={4} pl={5}>3333</Col>

                        <Col style={{ background: "green" }} lg={4} pl={5}>4444</Col> */}




                        <Col className='amenities' md={3} lg={3}>
                            <div className='pic'>
                                <img src={ac} />
                            </div>
                            <div className='relate'>
                                <h5>Air Conditioner</h5>
                                <p>Surely Available</p>
                            </div>
                        </Col>
                        <Col className='amenities' md={3} lg={3}>
                            <div className='pic'>
                                <img src={balcony} />
                            </div>
                            <div className='relate'>
                                <h5>Balcony</h5>
                                <p>You need to request</p>
                            </div>
                        </Col>
                        <Col className='amenities' md={3} lg={3}>
                            <div className='pic'>
                                <img src={bed} />
                            </div>
                            <div className='relate'>
                                <h5>Extra Bed</h5>
                                <p>You need to request</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='amenities' md={3} lg={3}>
                            <div className='pic'>
                                <img src={tv} />
                            </div>
                            <div className='relate'>
                                <h5>Flat TV</h5>
                                <p>Surely Available</p>
                            </div>
                        </Col>
                        <Col className='amenities' md={3} lg={3}>
                            <div className='pic'>
                                <img src={geyser} />
                            </div>
                            <div className='relate'>
                                <h5>Hot & Cold Water</h5>
                                <p>Surely Available</p>
                            </div>
                        </Col>
                        <Col className='amenities' md={3} lg={3}>
                            <div className='pic'>
                                <img src={intercom} />
                            </div>
                            <div className='relate'>
                                <h5>InterCom</h5>
                                <p>Surely Available</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='amenities' md={3} lg={3}>
                            <div className='pic'>
                                <img src={locker} />
                            </div>
                            <div className='relate'>
                                <h5>Locker</h5>
                                <p>Surely Available</p>
                            </div>
                        </Col>
                        <Col className='amenities' md={3} lg={3}>
                            <div className='pic'>
                                <img src={table} />
                            </div>
                            <div className='relate'>
                                <h5>Read Table</h5>
                                <p>Surely Available</p>
                            </div>
                        </Col>
                        <Col className='amenities' md={3} lg={3}>
                            <div className='pic'>
                                <img src={wifi} />
                            </div>
                            <div className='relate'>
                                <h5>WiFi</h5>
                                <p>Surely Available</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='offer'>
                <h2 className='head'>Popular Paying Guest (PG) in</h2>
                <p className='headDetails mb-2'>Below cities have the Premium Properties in different locations which are frequently booked by most Customers.</p>
                <Container>
                    <Row>
                        <Col md={2}>
                            <img className='city' src={chennai} />
                            <h6>Chennai</h6>
                        </Col>
                        <Col md={2}>
                            <img className='city' src={jaipur} />
                            <h6>Jaipur</h6>
                        </Col>
                        <Col md={2}>
                            <img className='city' src={kolkata} />
                            <h6>Kolkata</h6>
                        </Col>
                        <Col md={2}>
                            <img className='city' src={mumbai} />
                            <h6>Mumbai</h6>
                        </Col>
                        <Col md={2}>
                            <img className='city' src={delhi} />
                            <h6>New Delhi</h6>
                        </Col>
                        <Col md={2}>
                            <img className='city' src={pune} />
                            <h6>Pune</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>

    )
}

export default Home