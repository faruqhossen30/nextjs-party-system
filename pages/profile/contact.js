import React from 'react'
import { FaImage, FaUserAlt, FaEnvelope, FaMapPin } from 'react-icons/fa';
import Navnew from '../../components/Header/Navnew'
import LeftSidebar from '../../components/Profile/LeftSidebar';

const Mobile = () => {
    return (
        <>
            <Navnew />

            <div className="grid grid-cols-12 mx-auto p-2">
                <LeftSidebar />
                <div className='col-span-8 bg-white m-2 rounded-md p-2'>
                <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id='email' className='form-control border-emerald-600' placeholder='Email'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" name="" id='mobile' className='form-control border-emerald-600' placeholder='Mobile'/>
                    </div>
                    <button className=' bg-emerald-700 text-white rounded-md px-8 py-1 mt-2'>Save</button>
                </div>
            </div>
        </>
    )
}

export default Mobile
