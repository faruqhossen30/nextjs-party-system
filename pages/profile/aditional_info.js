import React, { useEffect, useState } from 'react'
import { FaBriefcase, FaBusinessTime, FaCloudsmith, FaCreativeCommonsBy, FaGenderless, FaRegClock, FaSave, FaTransgenderAlt } from 'react-icons/fa'
import Navnew from '../../components/Header/Navnew'
import LeftSidebar from '../../components/Profile/LeftSidebar'
import axios from '../../lib/axios';
import {changeHandaller} from '../../handaller/Handaller'

const aditional_info = () => {
    const [dob, setDob] = useState()
    const [gender, setGender] = useState(null)
    const [occupation, setOccupation] = useState(null)
    const [relation_status, setRelation_status] = useState(null)
    const [blood, setBlood] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/info`)
            .then((res) => {
                setDob(res.data.dob)
                setGender(res.data.gender)
                setOccupation(res.data.occupation)
                setRelation_status(res.data.relation_status)
                setBlood(res.data.blood)
            })
            .catch(err => console.log(err))
    }, [])
  
    const submitHandaller = (e) => {
        e.preventDefault()
        console.log('gender',gender);
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/profile/aditional_info`, {
            dob,gender,occupation,relation_status,blood
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
                <div className='col-span-8 bg-white m-2 rounded-md p-2'>
                    <form onSubmit={submitHandaller}>
                        <div className="form-group">
                            <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <FaRegClock />
                                </div>
                                <input type="date" name="dob" defaultValue={dob} onChange={(e) => changeHandaller(setDob, e.target.value)}  id='dob' className='form-control border-emerald-600' style={{ "paddingLeft": "40px" }} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <FaTransgenderAlt />
                                </div>
                                <select name="gender" id="gender" defaultValue={gender} onChange={(e) => changeHandaller(setGender, e.target.value)}  className='form-control' style={{ "paddingLeft": "40px" }}>
                                    <option>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="occupation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Occupation</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <FaBriefcase />
                                </div>
                                <input type="text" name="occupation" defaultValue={occupation} onChange={(e) => changeHandaller(setOccupation, e.target.value)}  id='occupation' className='form-control border-emerald-600' style={{ "paddingLeft": "40px" }} placeholder='Occupation' />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="relation_status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Relation Status</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <FaCloudsmith />
                                </div>
                                <input type="text" name="relation_status" id='relation_status' defaultValue={relation_status}onChange={(e) => changeHandaller(setRelation_status, e.target.value)}  className='form-control border-emerald-600' style={{ "paddingLeft": "40px" }} placeholder='Relation Status' />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="blood" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <FaGenderless />
                                </div>
                                <input type="text" name="blood" id='blood' defaultValue={blood} onChange={(e) => changeHandaller(setBlood, e.target.value)}  className='form-control border-emerald-600' style={{ "paddingLeft": "40px" }} placeholder='Blood' />
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

export default aditional_info
