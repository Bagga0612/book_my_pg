import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './CSS/layout.css'
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {

    
    return (
        <div>
            <Navbar/>
            <Outlet/>
            {/* <Footer /> */}


    


        </div>
    )
}

export default Layout