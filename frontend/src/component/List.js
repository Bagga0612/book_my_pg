import React, { useEffect, useState } from 'react'
import './CSS/list.css'
import PgName from './PgName';

import Carousel from 'react-bootstrap/Carousel';

import Search from './Search'
import carousel1 from './images/caroues1.jpg'
import carousel2 from './images/caroues2.jpg'
import carousel3 from './images/caroues3.jpg'
import Footer from './Footer';
import { useParams } from 'react-router-dom';


const List = () => {

  const [cityName, setCityName] = useState("");


  useEffect(() => {
    let url = new URL(window.location.href);
    let search_params = url.searchParams;
    setCityName(search_params.get('city'))
  }, [])


  // console.log("GET IDDDDD - ", getId)




  // useEffect(() => {
  // let {id} = useParams();

  // console.log("IDDD ", id)
  // }, [])


  // useEffect(() => {
  //   getCity();
  // }, []);
  // const getCity = async (e) => {
  //   // e.preventDefault();
  //   // useParams  serach that in chat gpt
  //   let url = new URL(window.location.href);
  //   let search_params = url.searchParams;
  //   let c_id = { c_id: search_params.get('id') }

  //   try {
  //     const response = await fetch("http://localhost:8080/property/getCity", {
  //       method: "POST", // or 'PUT'
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(c_id),
  //     }).then(async (res) => {
  //       let result = await res.json();

  //       console.log("ress_list_page", result)

  //       if (result.status === "success") {
  //         setCityName(result.data[0].city)
  //       }

  //     });

  //   } catch (error) {
  //     console.error("Error:", error);
  //   }

  // }


  return (
    <div className='list'>
      <h1 className='main'>Book My PG</h1>
      <h6 className='mainBelow'>India's Largest PG Network to Book your PG Online</h6>
      <Search />
      <Carousel data-bs-theme="dark" className='carousel'>
        <Carousel.Item>
          <img
            className="carouselimg d-block w-100"
            src={carousel1}
            alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselimg d-block w-100"
            src={carousel2}
            alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselimg d-block w-100"
            src={carousel3}
            alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <h4 className='listname'>PGs waiting to be yours near {cityName}
      </h4>
      <PgName />




      <Footer />
    </div>
  )
}

export default List