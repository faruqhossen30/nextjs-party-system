import React, { useEffect, useState } from 'react'
import { FaImage, FaUserAlt, FaEnvelope, FaMapPin, FaSave } from 'react-icons/fa';
import Navnew from '../../components/Header/Navnew'
import LeftSidebar from '../../components/Profile/LeftSidebar';
import axios from '../../lib/axios';

const Name = () => {
    const [profile, setProfile] = useState()
    const [name, setName] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/info`)
            .then((res) => {
                setProfile(res.data)
                setName(res.data.name)
            })
            .catch(err => console.log(err))

    }, [])
    const changHandaller = (e) => {
        setName(e.target.value)
    }

    const submitHandaller = (e) => {
        e.preventDefault()
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/profile/name`, {
            name
        })
            .then(response => {
                console.log(response);
                window.location.reload();
            })
    }



    return (
        <>
            <Navnew />

            <div className="grid grid-cols-12 mx-auto p-2">
                <LeftSidebar />
                {profile &&
                    (<div className='col-span-8 bg-white m-2 rounded-md p-4'>
                        <form onSubmit={submitHandaller}>
                            <div className="form-group mb-3">
                                <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <div className='relative'>
                                    <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input type="text" onChange={changHandaller} name="name" value={name} id='name' className='form-control' style={{ "paddingLeft": "40px" }} placeholder='Name' />
                                </div>
                            </div>

                            <button className='flex items-center space-x-1 p-1 px-3 bg-emerald-700 text-white rounded-sm'>
                                <FaSave />
                                <span>Save</span>
                            </button>
                        </form>
                    </div>)
                }
            </div>
        </>
    )
}

export default Name
