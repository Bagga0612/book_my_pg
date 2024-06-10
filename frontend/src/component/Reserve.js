import React from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'

import './CSS/reserve.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'

const Reserve = () => {
    const userDATA = useSelector((state) => state.loginSlice.userData);
    // const user_id = userDATA.id;
    console.log("bbbbbbb", userDATA.id)
    const navigate = useNavigate();

    const booked = async (e) => {
        e.preventDefault();
        let url = new URL(window.location.href);
        let search_params = url.searchParams;
        // setGetId(search_params.get('id'))
        let data = {
            p_id: search_params.get('property_id'),
            u_id: userDATA.id
        }

        console.log("wewewewewe", data)

        try {
            const response = await fetch("http://localhost:8080/property/reverseProperty", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then(async (res) => {
                let result = await res.json();

                console.log("ress", result)

                if (result.status === "already_reserved") {
                    toast.info("You already reserved this PG")
                    // setPropertiesDetail(result.data[0])
                }
                else if (result.status === "successfully_reserved") {
                    navigate('/');
                    toast.info("Property reserved Successfully.")
                }
            });

        } catch (error) {
            console.error("Error:", error);
        }

    }
    // toast.success('PG Reserve Successfuly')
    // navigate('/');


    return (
        <Form className='mt-4 p-3' onSubmit={booked}>
            <Form.Control size="lg" type="text" placeholder="First Name" required />
            <Form.Control className='mt-3' size="lg" type="text" placeholder="Last Name" required />
            <InputGroup className="mt-3">
                <InputGroup.Text>+91</InputGroup.Text>
                <Form.Control size="lg" type='number' id="inlineFormInputGroup" placeholder="Mobile Number" required />
            </InputGroup>
            <Form.Control className='mt-3' size="lg" type="text" placeholder="Enter Referral Code (Optional)" />

            <Form.Group className='mt-3' >
                <Form.Select defaultValue="Choose...">
                    <option>Choose Occupancy</option>
                    <option>Double Occupancy</option>
                    <option>Triple Occupancy</option>
                </Form.Select>
            </Form.Group>

            <InputGroup className="mt-3">
                <InputGroup.Text className='infoo'>We are accepting bookings for stay duration of minimum 3 months.</InputGroup.Text>
            </InputGroup>

            <Form.Check
                size='lg'
                type="checkbox"
                className="mt-3"
                label="I have read and agreed to the terms and conditions and privacy policy and hereby confirm to proceed."
            />
            <Button size="lg" type="submit" className="w-100 m-0 mt-4">
                Reserve Now
            </Button>
        </Form>
    )
}

export default Reserve