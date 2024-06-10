import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSliceAction } from './store/slices/loginSlice';


import Footer from './Footer'


import './CSS/dashboard.css'
import DashboardList from './DashboardList'


const Dashboard = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();


    const logoutHandler=()=>{
        localStorage.setItem("login", false);
        navigate('/Login');
        // console.log(localStorage.getItem("login"))


        dispatch.loginSliceAction.myLoginStatus("Login");

    }

    return (
        <div>
            <div style={{ display: "flex", width: "100%" }}>
                <div style={{ background: "red", width: "20%" }}>
                    <ul>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>

                    </ul>

                </div>
                <div style={{ background: "green", width: "80%" }}></div>


            </div>
            <button className='btn btn-primary' onClick={logoutHandler}>logout </button>

            <Footer />
        </div>
    )
}

export default Dashboard