import Link from 'next/link'
import _ from 'lodash'
import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { FaBell, FaCheckCircle, FaEnvelopeOpen, FaHome, FaIdCard, FaPlusCircle, FaPoll, FaPowerOff, FaSearch, FaUserCircle, FaUsers } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { AuthContext } from '../../contexts/AuthContext'
import FollowButton from '../Button/FollowButton'
import Search from './Search'

export default function Navnew() {
    const { user } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        setProfile(user);
        setIsLoading(false);
    });

    const logoutHandaller = () => {
        localStorage.clear();
        let url = window.location.origin + '/login'
        window.location.assign(url);
    }

    if (isLoading) {
        return <h2>Loading</h2>
    } else {
        return (
            <div className="bg-emerald-700 py-2 px-2 sticky top-0 z-50">
                <section className="mx-auto">
                    <div className=" grid grid-cols-12 items-center">
                        <div className="w-full col-span-3 sm:col-span-3 md:col-span-7 lg:col-span-6">
                            {/* Search start */}
                            <Search />
                            {/* Search End */}
                        </div>
                        <div className="w-full col-span-9 sm:col-span-9 md:col-span-5 lg:col-span-6">
                            <ul className="flex items-center justify-content-between gap-1 sm:gap-10 md:gap-8 lg:gap-8 m-0">
                                <li className="hidden md:block">
                                    <Link href="/" className="text-white">
                                        <FaHome className="h-6 w-6 " />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/polls" className="text-lg text-white">
                                        <FaPoll className="h-6 w-6" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/people" className="text-lg text-white">
                                        <FaUsers className="h-6 w-6" />
                                    </Link>
                                </li>

                                {/* Notification */}
                                <li>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <Link
                                                href="#"
                                                className="text-white relative">
                                                <FaBell className="h-6 w-6" />
                                                <span className="absolute -top-4 -right-3 animate-pulse font-extrabold   bg-clip-text bg-gradient-to-r from-emerald-400 to-pink-600">
                                                    2
                                                </span>
                                            </Link>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="p-2 w-72 overflow-auto h-96">
                                            <div className="flex items-center justify-between pt-0 p-2">
                                                <h6 className="font-bold m-0">
                                                    Notifications
                                                </h6>
                                                <span className="cursor-pointer">
                                                    ...
                                                </span>
                                            </div>
                                            <Dropdown.Item as="button">
                                                <Link href="/settings" className='flex items-center'>
                                                    <img src="/avatar.jpg" className="w-10 h-10 rounded-full" alt="username" />
                                                    <div className="ml-2">
                                                        <h6 className="m-0 capitalize text-sm">Test User Name </h6>
                                                        <p className="m-0 py-.5 text-muted text-sm"> lorem ipsum dolor aset </p>
                                                        <span className="capitalize text-sm"> 20 Minits ago </span>
                                                    </div>
                                                </Link>
                                            </Dropdown.Item>
                                            <div className="flex items-center justify-between pt-0 p-2">
                                                <Link href='#' className="font-bold m-0 text-sm">
                                                    View All Notifications
                                                </Link>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                {/* Language */}
                                <li className="text-white">
                                    <form className="w-8">
                                        <fieldset>
                                            <select className="border-none bg-inherit" name='lan'>
                                                <option
                                                    value="1"
                                                    className="bg-black text-white">
                                                    English
                                                </option>
                                                <option
                                                    value="2"
                                                    className="bg-black text-white">
                                                    ???????????????
                                                </option>
                                            </select>
                                        </fieldset>
                                    </form>
                                </li>
                                {/* Profiel image */}
                                <li>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <img
                                                // src='/profile.jpg'
                                                // src={profile && _.isNull(profile.avatar) ? '/profile.jpg' : `${process.env.NEXT_PUBLIC_BACKEND_URL}/${profile.avatar}`}
                                                src={profile && profile.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${profile.avatar}` : '/profile.jpg'}
                                                alt="avatar"
                                                className="w-10 h-10 ring-1 ring-white rounded-full mr-1"
                                            />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item as="button" className='px-1'>
                                                <Link href="/profile" className="flex items-center font-medium">
                                                    <FaIdCard className="mr-2" />
                                                    My Profile
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item as="button" className='px-1'>
                                                <Link href="/profile/photo" className="flex items-center font-medium">
                                                    <FaUserCircle className="mr-2" />
                                                    Settings
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item as="button" className='px-1'>
                                                <Link href="/followers" className="flex items-center font-medium">
                                                    <FaPlusCircle className="mr-2" />
                                                    Followers
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item as="button" className='px-1'>
                                                <Link href="/following" className="flex items-center font-medium">
                                                    <FaCheckCircle className="mr-2" />
                                                    Following
                                                </Link>
                                            </Dropdown.Item>

                                            {/* Logout  */}
                                            <Dropdown.Item as="button" className='py-0 px-2' onClick={logoutHandaller} >
                                                <div className='flex items-center' >
                                                    <FaPowerOff className='h-8' />
                                                    <div className='fs-10 p-2'>
                                                        <p className='text-sm p-0 m-0'>Logout</p>
                                                    </div>
                                                </div>
                                            </Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}