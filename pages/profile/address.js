import React, { useEffect, useState } from 'react'
import { FaImage, FaUserAlt, FaEnvelope, FaMapPin, FaSave, FaUser, FaMapMarkerAlt, FaAddressCard } from 'react-icons/fa';
import Navnew from '../../components/Header/Navnew'
import LeftSidebar from '../../components/Profile/LeftSidebar';
import { changeHandaller } from '../../handaller/Handaller'
import axios from '../../lib/axios';

const Mobile = () => {
    // Intioal User info
    const [profile, setProfile] = useState()

    // Frorm State
    const [address, setAddress] = useState()
    const [division, setDivision] = useState()
    const [district, setDistrict] = useState()
    const [upazilla, setUpazilla] = useState()
    const [union, setUnion] = useState()

    // Loading Location data
    const [divisions, setDivisions] = useState()
    const [districts, setDistricts] = useState()
    const [upazillas, setUpazillas] = useState()
    const [unions, setUnions] = useState()

    // const divisionChangeHandaller = ()=>{
    //     console.log();
    // }


    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/info`)
            .then((res) => {
                setProfile(res.data)
                setAddress(res.data.address)
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}/divisions`)
                    .then((res) => {
                        setDivisions(res.data)
                    })
                    .catch(err => console.log(err))
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}/districts`)
                    .then((res) => {
                        setDistricts(res.data)
                    })
                    .catch(err => console.log(err))
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}/upazillas`)
                    .then((res) => {
                        setUpazillas(res.data)
                    })
                    .catch(err => console.log(err))
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}/unions`)
                    .then((res) => {
                        setUnions(res.data)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }, [])
    // console.log(divisions);
    return (
        <>
            <Navnew />
            <div className="grid grid-cols-12 mx-auto p-2">
                <LeftSidebar />
                <div className='col-span-8 bg-white m-2 rounded-md p-4'>
                    <form action="">
                        <div className="form-group mb-3">
                            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <FaAddressCard />
                                </div>
                                <input type="text" value={address} onChange={(e) => changeHandaller(setAddress, e.target.value)} name="address" id='name' className='form-control' style={{ "paddingLeft": "40px" }} placeholder='Address' />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Division</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <FaMapMarkerAlt />
                                </div>
                                <select name="division" id="" className='form-control' style={{ "paddingLeft": "40px" }}>
                                    {divisions &&
                                        divisions.map((division) => {
                                            return <option value={division.id}>{division.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="district" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Division</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <FaMapMarkerAlt />
                                </div>
                                <input type="text" name="" id='name' className='form-control' style={{ "paddingLeft": "40px" }} placeholder='Division' />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Division</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <FaMapMarkerAlt />
                                </div>
                                <input type="text" name="" id='name' className='form-control' style={{ "paddingLeft": "40px" }} placeholder='Division' />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Division</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <FaMapMarkerAlt />
                                </div>
                                <input type="text" name="" id='name' className='form-control' style={{ "paddingLeft": "40px" }} placeholder='Division' />
                            </div>
                        </div>

                        <button className='flex items-center space-x-1 p-1 px-3 bg-emerald-700 text-white rounded-sm'>
                            <FaSave />
                            <span>Save</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Mobile
