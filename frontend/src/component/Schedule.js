import React from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'

import './CSS/schedule.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Schedule = () => {

    const navigate = useNavigate();

    const scheduled = () => {
        toast.info('We will call you soon...');
        navigate('/');
    }

    return (
        <Form className='mt-4 p-3' onSubmit={scheduled}>
            <Form.Control size="lg" type="text" placeholder="Name" required />
            <InputGroup className="mt-3">
                <InputGroup.Text>+91</InputGroup.Text>
                <Form.Control required size="lg" type='number' id="inlineFormInputGroup" placeholder="Mobile Number" />
            </InputGroup>
            <InputGroup className="mt-3">
                <InputGroup.Text className='infoo'>We are accepting bookings for stay duration of minimum 3 months.</InputGroup.Text>
            </InputGroup>

            <Form.Check
                required
                size='lg'
                type="checkbox"
                className="mt-3"
                label="I have read and agreed to the terms and conditions and privacy policy and hereby confirm to proceed."
            />
            <Button size="lg" type="submit" className="w-100 m-0 mt-4">
                Schedule a Visit
            </Button>
        </Form>
    )
}

export default Schedule