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
                        <label htmlFor="address">Address</label>
                        <input type="text" name="" id='address' className='form-control border-emerald-600' placeholder='Address' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="union">Union</label>
                        <input type="text" name="" id='union' className='form-control border-emerald-600' placeholder='Union' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="upazila">Upazila</label>
                        <input type="text" name="" id='upazila' className='form-control border-emerald-600' placeholder='Upazila' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="district">District</label>
                        <input type="text" name="" id='district' className='form-control border-emerald-600' placeholder='District' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="division">Division</label>
                        <input type="text" name="" id='division' className='form-control border-emerald-600' placeholder='Division' />
                    </div>
                    <button className=' bg-emerald-700 text-white rounded-md px-8 py-1 mt-2'>Save</button>
                </div>
            </div>
        </>
    )
}

export default Mobile
