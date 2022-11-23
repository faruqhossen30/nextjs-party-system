import React from 'react'
import Navnew from '../../components/Header/Navnew'
import Select from 'react-select'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

import FollowButton from '../../components/Button/FollowButton'

const people = () => {
    const options = [
        { value: 'dhaka', label: 'dhaka' },
        { value: 'jessore', label: 'jessore' },
        { value: 'khulna', label: 'khulna' },
        { value: 'chuadanga', label: 'chuadanga' },
        { value: 'magura', label: 'magura' },
        { value: 'feni', label: 'feni' },
    ]

    return (
        <>
            <Navnew />
            <div className="grid grid-cols-12 mx-auto p-2">
                <div className='col-span-4 bg-white m-2 rounded-md p-2'>
                    <div className=' border-b shadow-sm bg-gray-100'>
                        <h6 className='p-3 m-0'>Location Filter</h6>
                    </div>
                    <div>
                        <label htmlFor="" className='block my-2 text-sm font-medium text-gray-900 dark:text-white'>Divisions</label>
                        <Select className='select' isMulti isClearable={false} isSearchable={false} isDisabled={false} isLoading={false} options={options} />
                    </div>
                    <div>
                        <label htmlFor="" className='block my-2 text-sm font-medium text-gray-900 dark:text-white'>Districts</label>
                        <Select className='select' isMulti isClearable={false} isSearchable={false} isDisabled={false} isLoading={false} options={options} />
                    </div>
                    <div>
                        <label htmlFor="" className='block my-2 text-sm font-medium text-gray-900 dark:text-white'>Upazilas</label>
                        <Select className='select' isMulti isClearable={false} isSearchable={false} isDisabled={false} isLoading={false} options={options} />
                    </div>
                    <div>
                        <label htmlFor="" className='block my-2 text-sm font-medium text-gray-900 dark:text-white'>Unions</label>
                        <Select className='select' isMulti isClearable={false} isSearchable={false} isDisabled={false} isLoading={false} options={options} />
                    </div>
                </div>

                <div className='col-span-8 bg-white rounded-md p-2 m-2'>
                    <div className="rounded-full p-3 ring-2 ring-emerald-600  h-9 bg-white font-sans text-black flex items-center justify-end ">
                        <input
                            type="text"
                            className="ml-1 h-7 w-full  focus:outline-0"
                            placeholder="Search..."></input>
                        <button className="px-0 md:px-4">
                            <FaSearch className="h-4 pr-1" />
                        </button>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className="col-span-12  lg:col-span-6 bg-white rounded-md mb-1 shadow-xl m-2">
                            <div className='sm:flex items-center justify-between p-4' >
                                <div className='flex items-center'>
                                    {/* <img src={user.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${user.avatar}` : '/profile.jpg'} alt="" className='rounded-full w-12 h-12' /> */}
                                    <img src="/profile.jpg" className='rounded-full w-20 h-20' alt="" />
                                    <Link href="#" className='m-0'>
                                        <h6 className='ml-2 capitalize text-base leading-none mb-0'>Md Najmul Hasan</h6>
                                        <span className='ml-2 capitalize text-xs mb-0'>Md Najmul Hasan</span>
                                    </Link>
                                </div>
                                <FollowButton />
                            </div>
                        </div>
                        <div className="col-span-12  lg:col-span-6 bg-white rounded-md mb-1 shadow-xl m-2">
                            <div className='sm:flex items-center justify-between p-4' >
                                <div className='flex items-center'>
                                    {/* <img src={user.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${user.avatar}` : '/profile.jpg'} alt="" className='rounded-full w-12 h-12' /> */}
                                    <img src="/profile.jpg" className='rounded-full w-20 h-20' alt="" />
                                    <Link href="#" className='m-0'>
                                        <h6 className='ml-2 capitalize text-base leading-none mb-0'>Md Najmul Hasan</h6>
                                        <span className='ml-2 capitalize text-xs mb-0'>Md Najmul Hasan</span>
                                    </Link>
                                </div>
                                <FollowButton />
                            </div>
                        </div>
                        <div className="col-span-12  lg:col-span-6 bg-white rounded-md mb-1 shadow-xl m-2">
                            <div className='sm:flex items-center justify-between p-4' >
                                <div className='flex items-center'>
                                    {/* <img src={user.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${user.avatar}` : '/profile.jpg'} alt="" className='rounded-full w-12 h-12' /> */}
                                    <img src="/profile.jpg" className='rounded-full w-20 h-20' alt="" />
                                    <Link href="#" className='m-0'>
                                        <h6 className='ml-2 capitalize text-base leading-none mb-0'>Md Najmul Hasan</h6>
                                        <span className='ml-2 capitalize text-xs mb-0'>Md Najmul Hasan</span>
                                    </Link>
                                </div>
                                <FollowButton />
                            </div>
                        </div>
                        <div className="col-span-12  lg:col-span-6 bg-white rounded-md mb-1 shadow-xl m-2">
                            <div className='sm:flex items-center justify-between p-4' >
                                <div className='flex items-center'>
                                    {/* <img src={user.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${user.avatar}` : '/profile.jpg'} alt="" className='rounded-full w-12 h-12' /> */}
                                    <img src="/profile.jpg" className='rounded-full w-20 h-20' alt="" />
                                    <Link href="#" className='m-0'>
                                        <h6 className='ml-2 capitalize text-base leading-none mb-0'>Md Najmul Hasan</h6>
                                        <span className='ml-2 capitalize text-xs mb-0'>Md Najmul Hasan</span>
                                    </Link>
                                </div>
                                <FollowButton />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default people
