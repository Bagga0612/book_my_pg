import React, { useState, useEffect } from 'react'
import './CSS/pgName.css'
import { Col, Row, Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import WcIcon from '@mui/icons-material/Wc';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BathtubIcon from '@mui/icons-material/Bathtub';
import HotelIcon from '@mui/icons-material/Hotel';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import property1 from './images/properties/3.jpg'
import { toast } from 'react-toastify';

const PgName = () => {

    const [properties, setProperties] = useState([]);
    const [cityName, setCityName] = useState("");

    useEffect(() => {
        let url = new URL(window.location.href);
        let search_params = url.searchParams;
        setCityName(search_params.get('city'))
    }, [])

    //   console.log("GET  pg id - ", getId)

    // console.log("wwwww", properties)


    const navigate = useNavigate();

    const gotoDetail = (id) => {
        console.log("propert_id", id);
        navigate(`/List/Detail?property_id=${id}`)
    }

    useEffect(() => {
        getProperties();
    }, [])

    const getProperties = async (e) => {
        // e.preventDefault();
        let url = new URL(window.location.href);
        let search_params = url.searchParams;
        // setGetId(search_params.get('id'))
        let c_id = { c_id: search_params.get('id') }

        try {
            const response = await fetch("http://localhost:8080/property/getProperties", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(c_id),
            }).then(async (res) => {
                let result = await res.json();

                console.log("ress", result)

                if (result.status === "get_properties") {
                    setProperties(result.data)
                } else if (result.status === "dont_have_properties") {
                    toast.info("No PG listed now")
                }

            });

        } catch (error) {
            console.error("Error:", error);
        }

    }

    return (
        <>
            {
                properties.map((property, index) => (

                    <div className='pgname'>
                        {/* {`let p_id =property.id`} */}

                        <Row>
                            <Col md={4} className='pgpic'>
                                <div>
                                    <img src={property1} />
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className='smalldetail'>
                                    <Row>
                                        <Col md={6}>
                                            <h3 className='propertyName mb-0' onClick={() => gotoDetail(property.id)}>
                                                {property.pg_name}
                                            </h3>
                                            <p className='mb-2'>
                                                {cityName}
                                            </p>
                                        </Col>
                                        <Col md={6} className='namee pt-3'>
                                            <h6 className='pt-0'>
                                                {property.gender}
                                                <WcIcon />
                                            </h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='distance'>
                                            <h6><LocationOnIcon />{(Math.random() * 10).toFixed(1)}km away from Railway Station</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='available'>
                                            <h6><BathtubIcon /> Attached Washroom</h6><br />
                                            <h6><HotelIcon /> Double</h6>
                                            <h6><HotelIcon /> Triple</h6>
                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col className='distance'>
                                            <h6>start from</h6>
                                            <h3 className='mb-0'><CurrencyRupeeIcon />{property.rent}/mo*</h3>
                                        </Col>
                                        <Col>
                                            <Button className='btn' variant='primary' onClick={()=>gotoDetail(property.id)}>
                                                SCHEDULE A VISIT
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button variant='outline-primary' onClick={() => {
                                                toast.info("We will call you soon..")
                                            }}>
                                                REQUEST A CALLBACK
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                ))
            }

        </>
    )
}

export default PgName