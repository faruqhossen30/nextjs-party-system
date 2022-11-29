import React from 'react'
import { FaBriefcase, FaBusinessTime, FaCloudsmith, FaCreativeCommonsBy, FaGenderless, FaRegClock, FaSave, FaTransgenderAlt } from 'react-icons/fa'
import Navnew from '../../components/Header/Navnew'
import LeftSidebar from '../../components/Profile/LeftSidebar'

const aditional_info = () => {
    return (
        <>
            <Navnew />

            <div className="grid grid-cols-12 mx-auto p-2">
                <LeftSidebar />
                <div className='col-span-8 bg-white m-2 rounded-md p-2'>
                    <div className="form-group">
                        <label for="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                        <div className='relative'>
                            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                               <FaRegClock />
                            </div>
                            <input type="date" name="" id='dob' className='form-control border-emerald-600' style={{ "paddingLeft": "40px" }} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                        <div className='relative'>
                            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                               <FaTransgenderAlt />
                            </div>
                            <select name="gender" id="" className='form-control' style={{ "paddingLeft": "40px" }}>
                                <option value="">Select Gender</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                                <option value="">Other</option>
                            </select>
                        </div>

                    </div>
                    <div className="form-group">
                        <label for="occupation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Occupation</label>
                        <div className='relative'>
                            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                <FaBriefcase />
                            </div>
                            <input type="text" name="" id='occupation' className='form-control border-emerald-600' style={{ "paddingLeft": "40px" }} placeholder='Occupation' />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="relation_status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Relation Status</label>
                        <div className='relative'>
                            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                               <FaCloudsmith />
                            </div>
                            <input type="text" name="" id='relation_status' className='form-control border-emerald-600' style={{ "paddingLeft": "40px" }} placeholder='Relation Status' />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label for="blood" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood</label>
                        <div className='relative'>
                            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                               <FaGenderless />
                            </div>
                            <input type="text" name="" id='blood' className='form-control border-emerald-600' style={{ "paddingLeft": "40px" }} placeholder='Blood' />
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

export default aditional_info
