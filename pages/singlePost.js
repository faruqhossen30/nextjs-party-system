import React from 'react'
import Navnew from '../components/Header/Navnew'
import { FaFileVideo, FaThumbsUp, FaShareAlt, FaRegCommentDots } from 'react-icons/fa'

const singlePost = () => {
    return (
        <div>
            <Navnew />

            <div className="grid grid-cols-12 mx-auto">
                <div className="hidden md:block md:col-span-3 "></div>
                <div className="col-span-12 md:col-span-6 px-1 py-2 rounded">
                    <div className='mb-3 bg-white rounded'>
                        <div className='flex items-center justify-between p-3'>
                            <div className='flex items-center'>
                                {/* <a href='#'><img src="/profile.jpg" alt="" className='rounded-full w-12 h-12' /></a> */}
                                <a href='#'><img src='profile.jpg' alt="" className='rounded-full w-12 h-12' /></a>
                                <div className='ml-2 capitalize'>
                                    <a href='#'>
                                        <h6 className='leading-none p-0 m-0'>post title</h6>
                                    </a>
                                    <span className='text-sm text-gray-600'></span>
                                </div>
                            </div>
                            <div>
                                ...
                            </div>
                        </div>
                        <div>
                            <p className='py-2 text-justify text-base p-3'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, cumque.
                            </p>
                                
                            <img src="/profile.jpg" alt="" className='object-contain rounded w-full ' />
                        </div>
                        <div className='mt-4'>
                            <hr />
                            <div className='flex justify-between px-3  py-1'>

                                <div>
                                    <span className='flex items-center'>  <a href='#' className='mr-1'><FaRegCommentDots /> </a>comments | 1200</span>
                                </div>
                                <div>
                                    <div className='flex items-center'> <a href='#' className='mr-1'> <FaShareAlt /></a> share | 1200</div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="hidden md:block md:col-span-3 "></div>
            </div>

        </div>
    )
}

export default singlePost
