import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import List from './List';
import Login from './Login';
import Register from './Register';
import Detail from './Detail';
import Dashboard from './Dashboard';
import Profile from './Profile';
import GeneralSetting from './GeneralSetting';
import ReserveProperty from './ReserveProperty';

const RouteName = () => {
    return (
        <div>
            <Routes>
                <Route path="/"  element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/Contact" element={<Contact/>} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/List" element={<List/>} />
                    <Route path="/Register" element={<Register/>} />
                    <Route path="/List/Detail" element={<Detail/>} />
                    <Route path="/Dashboard" element={<Dashboard/>} />
                    <Route path="/Profile" element={<Profile/>} />
                    <Route path='/Profile/General_Setting' element={<GeneralSetting/>}/>
                    <Route path='/Profile/Reserve_Property' element={<ReserveProperty/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default RouteName