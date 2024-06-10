import { React, useEffect, useState } from 'react'
import Login from './Login';
import './CSS/profile.css'
import profile_bg from './images/profile_bg.jpg'
import { Button } from 'react-bootstrap';

import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {

    const userDATA = useSelector((state) => state.loginSlice.userData);
    // console.log("ooooo ", userDATA.name)

    const [logined, setLogined] = useState();


    const navigate = useNavigate();

    useEffect(() => {
        // getData();
        loggi();
    })
    function loggi() {
        setLogined(localStorage.getItem("login"))
    }

    const logout = () => {
        localStorage.setItem("login", false);
        localStorage.setItem("userData", "");
        navigate('/Login')
    }

    const setting =()=>{
        navigate('/Profile/General_Setting')
    }

    const reservePro =()=>{
        navigate('/Profile/Reserve_Property')
    }


    return (
        <>
            {
                logined === 'true' ?
                    <div className='profile'>

                        <img className='imgggg w-100 ' src={profile_bg} />
                        <div className='nameeeeee'>
                            <h2 className='nameeee'>Welcome, {userDATA.name}</h2>
                            <p>This is your Profile page. You can see your personal detail<br></br> and update it here. Also you can upgrade your plan<br></br> here and track it.</p>
                        </div>

                        <div className='maine'>
                            <table>
                                <tr>
                                    <td onClick={setting}>
                                        <EditIcon fontSize='large' className='m-2 mt-0 mb-0 pb-1' />Genral Setting
                                    </td>
                                </tr>
                                <tr>
                                    <td onClick={reservePro}>
                                        <BookOnlineIcon fontSize='large' className='m-2 mt-0 mb-0 pb-1' /> Reserved properties
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <UpgradeIcon fontSize='large' className='m-2 mt-0 mb-0 pb-1' />Track and Upgrade the plan
                                    </td>
                                </tr>
                                <tr>
                                    <td onClick={logout}>
                                        <LogoutIcon fontSize='large' className='m-2 mt-0 mb-0 pb-1' />Sign Out
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    : <Login />
            }
        </>

    )
}

export default Profile