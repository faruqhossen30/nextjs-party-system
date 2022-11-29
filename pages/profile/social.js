import React from 'react'
import { FaImage, FaUserAlt, FaEnvelope, FaMapPin, FaSave, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import { BiWorld, IconName } from "react-icons/bi";
import Navnew from '../../components/Header/Navnew'
import LeftSidebar from '../../components/Profile/LeftSidebar';

const Mobile = () => {
    return (
        <>
            <Navnew />

            <div className="grid grid-cols-12 mx-auto p-2">
                <LeftSidebar />
                <div className='col-span-8 bg-white m-2 rounded-md p-2'>
                    <div className="form-group mb-3">
                        <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
                        <div className='relative'>
                            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                <BiWorld />
                            </div>
                            <input type="text" name="name" id='name' className='form-control' style={{ "paddingLeft": "40px" }} placeholder='Website' />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label for="facebook" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook</label>
                        <div className='relative'>
                            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                <FaFacebookF />
                            </div>
                            <input type="text" name="name" id='name' className='form-control' style={{ "paddingLeft": "40px" }} placeholder='Facebook' />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label for="youtube" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Youtube</label>
                        <div className='relative'>
                            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                            <FaYoutube />
                            </div>
                            <input type="text" name="name" id='name' className='form-control' style={{ "paddingLeft": "40px" }} placeholder='Youtube' />
                        </div>

                    </div>
                    <div className="form-group mb-3">
                        <label for="twitter" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Twitter</label>
                        <div className='relative'>
                            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                            <FaTwitter />
                            </div>
                            <input type="text" name="name" id='name' className='form-control' style={{ "paddingLeft": "40px" }} placeholder='Twitter' />
                        </div>

                    </div>

                    <button className='flex items-center space-x-1 p-1 px-3 bg-emerald-700 text-white rounded-sm'>
                        <FaSave />
                        <span>Save</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Mobile
