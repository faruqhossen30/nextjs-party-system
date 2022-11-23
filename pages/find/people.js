import React from 'react'
import Navnew from '../../components/Header/Navnew'
import Select from 'react-select'
import Link from 'next/link'

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

                    <div className='grid grid-cols-12'>
                        <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 bg-white rounded-sm mb-1 shadow-xl m-2">
                            <div className="m-2 flex items-center py-2 border-b-2">
                                <img
                                    src="/profile.jpg"
                                    alt="profile photo"
                                    className="rounded-md w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24"
                                />
                                <div className="ml-2">
                                    <Link href=''>
                                        <h6 className="capitalize text-slate-700 m-0 sm:text-sm md:text-lg">
                                            name
                                        </h6>
                                    </Link>
                                    <span className="text-muted">name</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-2">
                                <h2 className="text-base m-0">
                                    12
                                    <span className="ml-1 text-xs text-muted">Followers</span>
                                </h2>
                                {/* <FollowButton followerid={person.id} /> */}
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 bg-white rounded-sm mb-1 shadow-xl m-2">
                            <div className="m-2 flex items-center py-2 border-b-2">
                                <img
                                    src="/profile.jpg"
                                    alt="profile photo"
                                    className="rounded-md w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24"
                                />
                                <div className="ml-2">
                                    <Link href=''>
                                        <h6 className="capitalize text-slate-700 m-0 sm:text-sm md:text-lg">
                                            name
                                        </h6>
                                    </Link>
                                    <span className="text-muted">name</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-2">
                                <h2 className="text-base m-0">
                                    12
                                    <span className="ml-1 text-xs text-muted">Followers</span>
                                </h2>
                                {/* <FollowButton followerid={person.id} /> */}
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 bg-white rounded-sm mb-1 shadow-xl m-2">
                            <div className="m-2 flex items-center py-2 border-b-2">
                                <img
                                    src="/profile.jpg"
                                    alt="profile photo"
                                    className="rounded-md w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24"
                                />
                                <div className="ml-2">
                                    <Link href=''>
                                        <h6 className="capitalize text-slate-700 m-0 sm:text-sm md:text-lg">
                                            name
                                        </h6>
                                    </Link>
                                    <span className="text-muted">name</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-2">
                                <h2 className="text-base m-0">
                                    12
                                    <span className="ml-1 text-xs text-muted">Followers</span>
                                </h2>
                                {/* <FollowButton followerid={person.id} /> */}
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 bg-white rounded-sm mb-1 shadow-xl m-2">
                            <div className="m-2 flex items-center py-2 border-b-2">
                                <img
                                    src="/profile.jpg"
                                    alt="profile photo"
                                    className="rounded-md w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24"
                                />
                                <div className="ml-2">
                                    <Link href=''>
                                        <h6 className="capitalize text-slate-700 m-0 sm:text-sm md:text-lg">
                                            name
                                        </h6>
                                    </Link>
                                    <span className="text-muted">name</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-2">
                                <h2 className="text-base m-0">
                                    12
                                    <span className="ml-1 text-xs text-muted">Followers</span>
                                </h2>
                                {/* <FollowButton followerid={person.id} /> */}
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 bg-white rounded-sm mb-1 shadow-xl m-2">
                            <div className="m-2 flex items-center py-2 border-b-2">
                                <img
                                    src="/profile.jpg"
                                    alt="profile photo"
                                    className="rounded-md w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24"
                                />
                                <div className="ml-2">
                                    <Link href=''>
                                        <h6 className="capitalize text-slate-700 m-0 sm:text-sm md:text-lg">
                                            name
                                        </h6>
                                    </Link>
                                    <span className="text-muted">name</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-2">
                                <h2 className="text-base m-0">
                                    12
                                    <span className="ml-1 text-xs text-muted">Followers</span>
                                </h2>
                                {/* <FollowButton followerid={person.id} /> */}
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 bg-white rounded-sm mb-1 shadow-xl m-2">
                            <div className="m-2 flex items-center py-2 border-b-2">
                                <img
                                    src="/profile.jpg"
                                    alt="profile photo"
                                    className="rounded-md w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24"
                                />
                                <div className="ml-2">
                                    <Link href=''>
                                        <h6 className="capitalize text-slate-700 m-0 sm:text-sm md:text-lg">
                                            name
                                        </h6>
                                    </Link>
                                    <span className="text-muted">name</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-2">
                                <h2 className="text-base m-0">
                                    12
                                    <span className="ml-1 text-xs text-muted">Followers</span>
                                </h2>
                                {/* <FollowButton followerid={person.id} /> */}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default people
