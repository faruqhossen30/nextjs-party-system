import React, { useContext, useEffect, useState } from 'react'

import { FaCheck, FaHeart, FaPlus, FaPlusCircle, FaUser, FaUsers } from 'react-icons/fa'
import { AuthContext } from '../../contexts/AuthContext'
import Skeleton from 'react-loading-skeleton'

const HomepageProfile = () => {
    const { user } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        setProfile(user);
        setIsLoading(false);
    });

    return (
        <>
            {
                isLoading && (<Skeleton count={5} />)
            }

            {profile &&
                <div>
                    <div className='p-4 bg-white m-2 rounded'>

                        <div className='relative'>
                            <img className="w-full h-20 object-cover rounded" src="/cover.jpg" alt="Flower and sky" />

                            <div className='ml-4 absolute top-16 flex items-center'>
                                <img src={profile.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${profile.avatar}` : '/profile.jpg'} alt="" className='rounded w-24 h-24' />

                                <div className='ml-2 pt-6'>
                                    <h6 className='capitalize text-lg leading-none'><strong>{profile.name}</strong></h6>
                                    <h6>Jessore</h6>
                                </div>
                            </div>
                        </div>

                        <div className='relative pt-24 flex items-center justify-evenly'>
                            <div className='text-center'>
                                <h6><strong>22323</strong></h6>
                                <span>Followers</span>
                            </div>
                        </div>

                        <div className='flex items-center justify-center py-4'>
                            <FaPlusCircle />
                            <h6 className='m-0 p-0'> Follow This Week</h6>
                        </div>

                        <div className='text-center'>
                            <div className="flex -space-x-1 py-1 overflow-hidden items-center justify-center">
                                <a href="" title='name'> <img src="profile.jpg" alt="" className='rounded-full w-10 h-10 ring ring-emerald-600 ring-2' /></a>
                                <a href="" title='name'> <img src="profile.jpg" alt="" className='rounded-full w-10 h-10 ring ring-emerald-600 ring-2' /></a>
                                <a href="" title='name'> <img src="profile.jpg" alt="" className='rounded-full w-10 h-10 ring ring-emerald-600 ring-2' /></a>
                                <a href="" title='name'> <img src="profile.jpg" alt="" className='rounded-full w-10 h-10 ring ring-emerald-600 ring-2' /></a>
                                <a href="" title='name'> <img src="profile.jpg" alt="" className='rounded-full w-10 h-10 ring ring-emerald-600 ring-2' /></a>
                            </div>

                            <button className='p-2 mt-4 bg-emerald-800 text-white text-sm font-semibold rounded-sm shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                                <div className='flex items-center space-x-1'>
                                    <FaUsers />
                                    <span>View Profiles</span>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default HomepageProfile