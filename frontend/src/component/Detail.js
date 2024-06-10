import React, { useState, useEffect } from 'react'
import { Col, Row, Carousel, OverlayTrigger, Popover, Form, InputGroup, Button } from 'react-bootstrap';
import { blue } from '@mui/material/colors';


import Footer from './Footer'
import './CSS/detail.css'

import WcIcon from '@mui/icons-material/Wc';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShareIcon from '@mui/icons-material/Share';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import RouterIcon from '@mui/icons-material/Router';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import TvIcon from '@mui/icons-material/Tv';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HotTubIcon from '@mui/icons-material/HotTub';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkIcon from '@mui/icons-material/Link';


import property1 from './images/properties/1.jpg'
import property2 from './images/properties/2.jpg'
import property3 from './images/properties/3.jpg'
import path from './images/path1.jpg'
import Schedule from './Schedule';
import Reserve from './Reserve';



const Detail = () => {
    const [propertyDetail, setPropertiesDetail] = useState([]);
    const [showText, setShowText] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const toggleChecked = () => {
        setIsChecked(prevState => !prevState);
    };

    const showMore = () => {
        setShowText(false)
    }
    const showLess = () => {
        setShowText(true)
    }




    useEffect(() => {
        getPropertiesDetail();
    }, [])

    const getPropertiesDetail = async (e) => {
        let url = new URL(window.location.href);
        let search_params = url.searchParams;
        // setGetId(search_params.get('id'))
        let p_id = { p_id: search_params.get('property_id') }

        try {
            const response = await fetch("http://localhost:8080/property/getPropertyDetail", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(p_id),
            }).then(async (res) => {
                let result = await res.json();

                console.log("ress", result)

                if (result.status === "get_property_detail") {
                    setPropertiesDetail(result.data[0])
                }
            });

        } catch (error) {
            console.error("Error:", error);
        }

    }

    console.log("hhhhhh", propertyDetail)






    const popOver = (
        <Popover className='w-25' id="popover-basic">
            <Popover.Body >
                <h5 className='pb-3 fs-4 mb-0'>Sharing List</h5>
                <Row className='align-content-center '>
                    <Col md={4}> <span className='m-3 mt-0 mb-0'><LinkIcon fontSize='large' sx={{ color: blue[900] }} /></span><p className='icon mb-0'>Copy Link</p></Col>
                    <Col md={4}><span className='m-3 mt-0 mb-0'><FacebookIcon fontSize='large' sx={{ color: blue[900] }} /></span><p className='icon mb-0'>Facebook</p></Col>
                    <Col md={4}><span className='m-3 mt-0 mb-0'> <WhatsAppIcon fontSize='large' sx={{ color: blue[900] }} /></span><p className='icon mb-0'>WhatsApp</p>  </Col>
                </Row>
            </Popover.Body>
        </Popover>
    );


    return (
        <div className='h-100'>
            <div className='details'>
                <img src={path} className='imgg d-flex' />
                <p className='text text-center'>You feel in PG's room like a HOME...</p>
                <div className='namee'>
                    <Row>
                        <Col md={11}>
                            <h2>{propertyDetail?.pg_name}</h2>
                            <h5> Unisex<WcIcon /></h5>
                        </Col>
                        <Col>
                            <OverlayTrigger trigger="click" placement='left' overlay={popOver}>
                                <ShareIcon className='icon' fontSize='large' sx={{ color: blue[900] }} />
                            </OverlayTrigger>
                        </Col>
                    </Row>
                    <p className='mb-0'>{propertyDetail.address}</p>
                </div>
                <Row className='p-4'>
                    <Col md={7}>
                        <Carousel data-bs-theme="dark" className='carousel w-99 m-0'>
                            <Carousel.Item>
                                <img
                                    className="carouselimg d-block w-100"
                                    src={property3}
                                    alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carouselimg d-block w-100"
                                    src={property2}
                                    alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carouselimg d-block w-100"
                                    src={property1}
                                    alt="Third slide" />
                            </Carousel.Item>
                        </Carousel>
                        <p className='p-4 mb-0 pb-0 fw-medium'>Starts from</p>
                        <h1><CurrencyRupeeIcon />{propertyDetail.rent}/mo*</h1>
                        <p>*Denotes starting price exclusive of GST. Final prices may vary based on room occupancy, customized services, and additional attributes.</p>
                        <h5 className='mt-5 fs-3 fw-bold'>Available Occupancies</h5>
                        <div className='p-4 pb-2 d-inline-block'>
                            <div className='twobed'>
                                <LocalHotelIcon sx={{ color: blue[900] }} /> x 2
                            </div>
                            <div className='alv'>
                                <p className='mb-0'>Double Occupancy</p>
                                <p className='mb-0 fs-5 fw-bold'>₹{propertyDetail.rent}/mo*</p>
                            </div>
                        </div>
                        <div className='p-4 pb-2 d-inline-block'>
                            <div className='twobed'>
                                <LocalHotelIcon sx={{ color: blue[900] }} /> x 3
                            </div>
                            <div className='alv'>
                                <p className='mb-0'>Triple Occupancy</p>
                                <p className='mb-0 fs-5 fw-bold'>₹18,599/mo*</p>
                            </div>
                        </div>

                        <h5 className='mt-5 fs-3 fw-bold'>Amenities</h5>
                        <div className='m-3 mb-2 p-2 pb-0 ameniti d-inline-block'>
                            <BathtubIcon sx={{ color: blue[900] }} className='m-2 mt-0 mb-0' /><p className='fs-6 d-inline-block'>Attached Washroom</p>
                        </div>
                        <div className='m-3 mb-2 p-2 pb-0 ameniti d-inline-block'>
                            <KeyboardAltIcon sx={{ color: blue[900] }} className='m-2 mt-0 mb-0' /><p className='fs-6 d-inline-block'>
                                Spacious Cupboard</p>
                        </div>

                        <h5 className='mt-5 fs-3 fw-bold'>Services</h5>
                        <div>
                            <div className='m-3 mb-2 p-2 pb-0 ameniti d-inline-block'>
                                <DinnerDiningIcon sx={{ color: blue[900] }} className='m-2 mt-0 mb-0' /><p className='fs-6 d-inline-block'>Hot and Delicious Meals</p>
                            </div>
                            <div className='m-3 mb-2 p-2 pb-0 ameniti d-inline-block'>
                                <RouterIcon sx={{ color: blue[900] }} className='m-2 mt-0 mb-0' /><p className='fs-6 d-inline-block'>
                                    High-Speed WIFI</p>
                            </div>
                            <div className='m-3 mb-2 p-2 pb-0 ameniti d-inline-block'>
                                <ElectricalServicesIcon sx={{ color: blue[900] }} className='m-2 mt-0 mb-0' /><p className='fs-6 d-inline-block'>
                                    Power Backup</p>
                            </div>
                        </div>
                        <div>
                            <div className='m-3 mb-2 p-2 pb-0 ameniti d-inline-block'>
                                <DryCleaningIcon sx={{ color: blue[900] }} className='m-2 mt-0 mb-0' /><p className='fs-6 d-inline-block'>Professional Housekeeping
                                </p>
                            </div>
                            <div className='m-3 mb-2 p-2 pb-0 ameniti d-inline-block'>
                                <KitchenIcon sx={{ color: blue[900] }} className='m-2 mt-0 mb-0' /><p className='fs-6 d-inline-block'>
                                    Spacious Refrigerator</p>
                            </div>
                            <div className='m-3 mb-2 p-2 pb-0 ameniti d-inline-block'>
                                <LocalLaundryServiceIcon sx={{ color: blue[900] }} className='m-2 mt-0 mb-0' /><p className='fs-6 d-inline-block'>
                                    Washing Machine</p>
                            </div>
                        </div>
                        <div>
                            <div className='m-3 mb-2 p-2 pb-0 ameniti d-inline-block'>
                                <HotTubIcon sx={{ color: blue[900] }} className='m-2 mt-0 mb-0' /><p className='fs-6 d-inline-block'>Hot Water Supply</p>
                            </div>
                            <div className='m-3 mb-2 p-2 pb-0 ameniti d-inline-block'>
                                <WaterDropIcon sx={{ color: blue[900] }} className='m-2 mt-0 mb-0' /><p className='fs-6 d-inline-block'>
                                    Water Purifier</p>
                            </div>
                            <div className='m-3 mb-2 p-2 pb-0 ameniti d-inline-block'>
                                <TvIcon sx={{ color: blue[900] }} className='m-2 mt-0 mb-0' /><p className='fs-6 d-inline-block'>
                                    Flat Screen Television</p>
                            </div>
                        </div>


                        <h5 className='mt-5 fs-3 fw-bold'>Details of {propertyDetail?.pg_name}</h5>
                        {showText ?
                            <>
                                <p className='mt-4 mb-0 fs-6 fw-semibold'>Why do we say Benin House by Stanza Living is your second home and not just a Bandra?<br></br>

                                    Because, just like back at home, this fully-furnished residence has all the comforts you're used to. Housekeeping (so your room's always neat and clean), high-speed wifi (so your streaming is</p>
                                <span onClick={showMore} className='show fs-6 fw-bold'>Read more...</span>
                            </>
                            :
                            <>
                                <p className='mt-4 mb-0 fs-6 fw-semibold'>Why do we say Benin House by Stanza Living is your second home and not just a Bandra?<br></br>

                                    Because, just like back at home, this fully-furnished residence has all the comforts you're used to. Housekeeping (so your room's always neat and clean), high-speed wifi (so your streaming is uninterrupted), curated meals (so you never miss home-cooked food), and many more such thoughtfully-selected amenities.<br></br>

                                    But besides comforts that you're used to, we also offer those that you've never experienced before. Thanks to the Stanza Living - Resident App, the use of machine learning and our other one-of-a-kind tech-integrations shape an effortless living experience.<br></br>

                                    And while we're fans of technology like you are, we also cherish real-world bonding. That's why we regularly organize community events and workshops so you can make memories with your co-residents, and pretty soon you become part of the Stanza Living family.<br></br>

                                    We're also implementing every safety measure possible to protect you from COVID-19, from regular sanitization to thermal monitoring. After all, that's what family is for, isn't it?<br></br>

                                    All this and more sets Benin House apart from any . But if you're still unsure, that's alright. In fact, we had like you to drop by for a visit and see for yourself, what makes your second home, your second home.
                                </p>
                                <span onClick={showLess} className='show fs-6 fw-bold'>Read less...</span>
                            </>
                        }
                    </Col>
                    <Col md={5} className='colll' >
                        <div className="toggle-container">
                            <label className="toggle">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={toggleChecked}
                                />
                                <span className="slider round"></span>
                            </label>
                            <h4 id='visit'>Schedule a Visit</h4>
                            <h4 id='now'>Reserve Now</h4>
                            <p>{isChecked ? <Reserve /> : <Schedule />}</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}

export default Detail