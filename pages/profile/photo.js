import React from 'react'
import { FaImage, FaUserAlt, FaEnvelope, FaMapPin } from 'react-icons/fa';
import Navnew from '../../components/Header/Navnew'
import LeftSidebar from '../../components/Profile/LeftSidebar';

const Photo = () => {
    return (
        <>
            <Navnew />

            <div className="grid grid-cols-12 mx-auto p-2">
                <LeftSidebar />
                <div className='col-span-8 bg-white m-2 rounded-md p-2'>
                   <div className=' flex items-center'>
                   <input type="file" name="" id="" />
                    <img src="/profile.jpg" alt="" />
                   </div>
                    <button className=' bg-emerald-700 text-white rounded-md px-8 py-1 mt-2'>Save</button>
                </div>
            </div>
        </>
    )
}

export default Photo
