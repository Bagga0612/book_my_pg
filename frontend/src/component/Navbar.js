import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './CSS/navbar.css'
import logo from './images/logo1.jpg'
import { useSelector } from 'react-redux'

const Navbar = (props) => {
    const [logined, setLogined] = useState();

    const loginStatus = useSelector((state) => state.loginSlice.loginStatus);

    console.log("GGG ", loginStatus)


    useEffect(() => {
        loggi();
    })
    function loggi() {
        setLogined(localStorage.getItem("login"))
    }


    // console.log(localStorage.getItem("login"))

    // setShowLink(props.d)
    return (
        <div>
            <nav id='navbar'>
                <NavLink to="/"><img src={logo} /></NavLink>
                <ul >
                    <li>
                        <NavLink id='me' to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink id='me' to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink id='me' to="/Contact">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink id='me' to="/Profile">Profile</NavLink>
                    </li>
                    {/* {loginStatus === 'LoggedIn' && <li>
                        <NavLink id='me' to="/Dashboard">Dashboard</NavLink>
                    </li>}
                    {loginStatus === 'Login' && <li>
                        <NavLink id='me' to="/Login">Login</NavLink>
                    </li>} */}

                </ul>
            </nav>
        </div>
    )
}

export default Navbar