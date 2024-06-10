import React from 'react'

import './CSS/generalSetting.css'

import profile_bg from './images/profile_bg.jpg'
import { useSelector } from 'react-redux';



const GeneralSetting = () => {
    const userDATA = useSelector((state) => state.loginSlice.userData);

    return (
        <div className='general'>
            <img className='imgggg w-100 ' src={profile_bg} />
            <div className='reservename'>
                <h2 className='nameeee'>Personal Details:</h2>
                <table className='profiletable align-content-center'>
                    <tr>
                        <td>
                            Name:
                            <p>{userDATA.name}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email:
                            <p>{userDATA.email}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phn no.:
                            <p>{userDATA.phn_no}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Gender:
                            <p>{userDATA.gender}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Date of Birth:
                            <p>{userDATA.dob}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Password:
                            <p>***********</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default GeneralSetting