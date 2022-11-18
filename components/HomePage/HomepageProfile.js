import React, { useContext, useEffect, useState } from 'react'

import { FaHeart } from 'react-icons/fa'
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
                            <img className="w-full h-20 object-cover rounded" src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Flower and sky" />

                            <div className='ml-4 absolute top-16 flex items-center'>
                                <img src={profile.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/photos/profile/${profile.avatar}` : 'profile.jpg'} alt="" className='rounded w-24 h-24' />

                                <div className='ml-2 pt-6'>
                                    <h6 className='capitalize text-lg leading-none'><strong>{profile.name}</strong></h6>
                                    <h6>Jessore</h6>
                                </div>
                            </div>
                        </div>

                        <div className='relative pt-24 flex items-center justify-evenly'>
                            <div className='text-center border-r-2 border-indigo-600 pr-6'>
                                <h6><strong>22323</strong></h6>
                                <span>Likes</span>
                            </div>
                            <div className='text-center border-r-2 border-indigo-600 pr-6'>
                                <h6><strong>22323</strong></h6>
                                <span>Likes</span>
                            </div>
                            <div className='text-center'>
                                <h6><strong>22323</strong></h6>
                                <span>Likes</span>
                            </div>
                        </div>

                        <div className='flex items-center justify-center py-4'>
                            <FaHeart />
                            <h6> New Likes This Week</h6>
                        </div>

                        <div className='text-center'>
                            <div className='flex justify-center'>
                                <a href=""> <img src="profile.jpg" alt="" className='rounded-full w-10 h-10' /></a>
                                <a href=""> <img src="profile.jpg" alt="" className='rounded-full w-10 h-10' /></a>
                                <a href=""> <img src="profile.jpg" alt="" className='rounded-full w-10 h-10' /></a>
                                <a href=""> <img src="profile.jpg" alt="" className='rounded-full w-10 h-10' /></a>
                                <a href=""> <img src="profile.jpg" alt="" className='rounded-full w-10 h-10' /></a>
                            </div>
                            <button className='py-2 mt-4 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>View Profile</button>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default HomepageProfile