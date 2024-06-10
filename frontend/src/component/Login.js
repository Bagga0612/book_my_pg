import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'

import './CSS/login.css'

import loginpic from './images/login.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginSliceAction } from './store/slices/loginSlice';



const Login = () => {
    const [dddd, setdddd] = useState(false);
    const dispatch = useDispatch();

    const userDATA = useSelector((state) => state.loginSlice.userData);
    console.log("HHHHH ", userDATA)


    const navigate = useNavigate();

    const gotoRegister = () => {
        navigate('/Register')
    }


    // const gotoDashboard = () => {
    //     navigate('/Dashboard');
    //     localStorage.setItem('login', true);
    //     console.log(localStorage.getItem("login"))
    // }

    useEffect(() => {
        let currentLoginStatus = localStorage.getItem("login");
        if (currentLoginStatus === "true") {
            dispatch(loginSliceAction.userLoginData(JSON.parse(localStorage.getItem("userData"))));
            navigate(`/Profile`);
        }
    }, [])



    const checkData = async (e) => {
        e.preventDefault();
        let data = {
            email: e.target[0].value,
            password: e.target[1].value
        }

        // try {
        const response = await fetch("http://localhost:8080/user-login", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(async (res) => {
            let result = await res.json();

            console.log("ress", result)

            // toast.error("qwertyuio")
            if (result.status === "not_registered_email") {
                toast.error("email is not registered");
            } else if (result.status === "invalid_password") {
                toast.error("invalid password");
            }
            else if (result.status === "Login_successfully") {
                // dispatch.loginSliceAction.myLoginStatus("LoggedIn");

                // console.log("gygygyg ", result.data)


                toast.success("Login Successfully");
                dispatch(loginSliceAction.userLoginData(result.data[0]));
                localStorage.setItem("login", true);
                localStorage.setItem("userData", JSON.stringify(result.data[0]));
                navigate(`/Profile`);



                // navigate(`/Profile?id${result.data[0].id}`)
                // dispatch(loginSliceAction.myLoginStatus("LoggedIn"));


            }


        });
        // } 
        // catch (error) {
        //     console.error("Error:", error);
        // }
    }


    return (
        <div className='login'>
            <Container>
                <Row>
                    <Col md={6} className='loginpic'>
                        <img src={loginpic} />
                    </Col>
                    <Col md={6} className='form'>
                        <Form onSubmit={checkData}>
                            <h3>Sign In</h3>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className='labels'>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label className='labels'>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <p>Forget Password</p>
                        <h6>Not a member?  <span onClick={gotoRegister} style={{ color: 'rgb(35, 69, 145)', cursor: 'pointer' }}>Sign Up</span></h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login