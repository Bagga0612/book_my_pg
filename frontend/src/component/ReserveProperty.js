import React, { useEffect } from 'react'

import './CSS/reserveProperty.css'

import profile_bg from './images/profile_bg.jpg'
import { useSelector } from 'react-redux';



const ReserveProperty = () => {

    const userDATA = useSelector((state) => state.loginSlice.userData);
    console.log("bbbbbbb", userDATA.id)

    useEffect(() => {
        r_property();
    }, [])

    const r_property = async () => {
        let data = {
            u_id: userDATA.id
        }

        console.log("wewewewewe", data)

        try {
            const response = await fetch("http://localhost:8080/property/getReverseProperty", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then(async (res) => {
                let result = await res.json();

                console.log("ressyyy", result)

                if (result.status === "already_reserved") {
                    // toast.info("You already reserved this PG")
                    // setPropertiesDetail(result.data[0])
                }
                else if (result.status === "successfully_reserved") {
                    // navigate('/');
                    // toast.info("Property reserved Successfully.")
                }
            });

        } catch (error) {
            console.error("Error:", error);
        }

    }

    return (
        <div className='reserveProperty'>
            <img className='imgggg w-100 ' src={profile_bg} />
            <div className='reservename'>
                <h2 className='nameeee'>Reserved Properties:</h2>
                <p>
                    List PG Reserved by you are listed below;
                </p>

                <table className='reservetable align-content-center'>
                    <tr>
                        <th>Sr. no.</th>
                        <th>PG Name</th>
                        <th>PG Address</th>
                        <th>Rent</th>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>Benin House</td>
                        <td>#675, Libra, Khanna, Punjab (141400)</td>
                        <td>12899Rs.</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Lal BahaDur House</td>
                        <td>#674, street no. 03, near gurudwara, Bija, GT Road, Khanna, Punjab</td>
                        <td>8499Rs.</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Manish PG House</td>
                        <td>House no. 246, Shastri Nagar, Ludhiana 141010</td>
                        <td>4500Rs.</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ReserveProperty