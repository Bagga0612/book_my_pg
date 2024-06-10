import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import './CSS/search.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Search = () => {
    const [enteredCity, setEnteredCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const navigate = useNavigate();

    let cityArray = [
        'Ambala',
        'Amritsar',
        'Barnala',
        'Bathinda',
        'Firozpur',
        'Faridkot',
        'Fatehgarh Sahib',
        'Fazilka',
        'Gurdaspur',
        'Hoshiarpur',
        'Jalandhar',
        'Kapurthala',
        'Khanna',
        'Ludhiana',
        'Mansa',
        'Moga',
        'Sri Muktsar Sahib',
        'Pathankot',
        'Patiala',
        'Rupnagar',
        'Ajitgarh (Mohali)',
        'Sangrur',
        'Nawanshahr',
        'Tarn Taran',
        'Goa',
        'Delhi',
        'Mumbai'
    ]

    const handleInputChange = (e) => {
        const value = e.target.value;
        setEnteredCity(value);

        // Filter cities based on input value
        const filteredCities = cityArray.filter(city =>
            city.toLowerCase().includes(value.toLowerCase())
        );

        // Update suggestions with filtered cities
        setSuggestions(filteredCities);
    };

    const handleSuggestionClick = (city) => {
        setEnteredCity(city);
        setSuggestions([]);
    }

    const getCity = async (e) => {
        e.preventDefault();

        let data = { city: e.target[0].value }

        // try {
        const response = await fetch("http://localhost:8080/property/city", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(async (res) => {
            let result = await res.json();

            console.log("ress", result)
            // console.log("ress", result.data[0].id)


            if (result.status === "dont_have_pg") {
                toast.error("We don't have PG in that city")
            }
            else {
                if (localStorage.getItem("login") === "true") {
                    navigate(`/List?id=${result.data[0].id}&&city=${result.data[0].city}`)
                } else {
                    navigate(`/Login`)
                    toast.info("Please login before search")
                }

            }

        });

        // } catch (error) {
        //     console.error("Error:", error);
        // }
    }



    return (
        <div className='search'>
            <Form onSubmit={getCity} className='d-flex'>
                {/* <InputGroup className="mb-3"> */}
                <Form.Control
                    placeholder="Enter City where you search stay..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={enteredCity}
                    onChange={handleInputChange}
                    // onChange={data}
                    required />
                <Button className='mt-0 m-0' type='submit' variant="outline-secondary" id="button-addon2">
                    <SearchIcon />
                </Button>
                {/* <Button className='mt-0' variant="primary" id="button-addon2">
                        <LocationSearchingIcon /> Near me
                    </Button> */}
                {/* </InputGroup> */}
            </Form>
            <ul style={{ position: "absolute", background: "white" }}>
                {suggestions.map((city, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(city)} className='w-100'>
                        {city}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search