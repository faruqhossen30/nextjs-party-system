import React, { useEffect, useState } from 'react'
import { FaImage, FaUserAlt, FaEnvelope, FaMapPin, FaSave, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import { BiWorld, IconName } from "react-icons/bi";
import Navnew from '../../components/Header/Navnew'
import LeftSidebar from '../../components/Profile/LeftSidebar';
import { changeHandaller } from '../../handaller/Handaller'

import axios from '../../lib/axios';

const Mobile = () => {
    const [profile, setProfile] = useState()
    const [website, setWebsite] = useState()
    const [facebook, setFacebook] = useState(null)
    const [youtube, setYoutube] = useState(null)
    const [twitter, setTwitter] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/info`)
            .then((res) => {
                setProfile(res.data)
                setWebsite(res.data.website)
                setFacebook(res.data.facebook)
                setYoutube(res.data.youtube)
                setTwitter(res.data.twitter)
            })
            .catch(err => console.log(err))
    }, [])

    const submitHandaller = (e) => {
        e.preventDefault()
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/profile/social`, {
            website, facebook, youtube, twitter
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
                    (<div className='col-span-8 bg-white m-2 rounded-md p-2'>
                        <form onSubmit={submitHandaller}>
                            <div className="form-group mb-3">
                                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
                                <div className='relative'>
                                    <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                        <BiWorld />
                                    </div>
                                    <input type="text" name="website" id='name' value={website} onChange={(e) => changeHandaller(setWebsite, e.target.value)} className='form-control' style={{ "paddingLeft": "40px" }} placeholder='Website' />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="facebook" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook</label>
                                <div className='relative'>
                                    <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                        <FaFacebookF />
                                    </div>
                                    <input type="text" name="facebook" value={facebook} onChange={(e) => changeHandaller(setFacebook, e.target.value)} id='facebook' className='form-control' style={{ "paddingLeft": "40px" }} placeholder='Facebook' />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="youtube" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Youtube</label>
                                <div className='relative'>
                                    <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                        <FaYoutube />
                                    </div>
                                    <input type="text" name="youtube" value={youtube} onChange={(e) => changeHandaller(setYoutube, e.target.value)} id='youtube' className='form-control' style={{ "paddingLeft": "40px" }} placeholder='Youtube' />
                                </div>

                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="twitter" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Twitter</label>
                                <div className='relative'>
                                    <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                        <FaTwitter />
                                    </div>
                                    <input type="text" name="twitter" value={twitter} onChange={(e) => changeHandaller(setTwitter, e.target.value)} id='twitter' className='form-control' style={{ "paddingLeft": "40px" }} placeholder='Twitter' />
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
export default Mobile
