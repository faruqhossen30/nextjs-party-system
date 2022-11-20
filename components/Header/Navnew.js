import Link from 'next/link'
import _ from 'lodash'
import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { FaBell, FaEnvelopeOpen, FaHome, FaPoll, FaPowerOff, FaSearch, FaUserCircle } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { AuthContext } from '../../contexts/AuthContext'

export default function Navnew() {
    const{user} = useContext(AuthContext)
    const[isLoading, setIsLoading] = useState(true);
    const[profile, setProfile] = useState(null);
    useEffect(()=>{
        setProfile(user);
        setIsLoading(false);
    });

    const logoutHandaller = ()=>{
        localStorage.clear();
        let url = window.location.origin+'/login'
        window.location.assign(url);        
    }

    if(isLoading){
        return <h2>Loading</h2>
    }else{
        return (
            <div className="bg-emerald-700 py-2 px-2 sticky top-0 z-50">
                <section className="mx-auto">
                    <div className=" grid grid-cols-12 items-center">
                        <div className="w-full col-span-3 sm:col-span-3 md:col-span-7 lg:col-span-6">
                            {/* Search start */}
                            <div className="flex items-center flex-grow">
                                <Link href="/" className="w-10 mr-4">

                                    <img
                                        src="/logo.jpg"
                                        alt=""
                                        className="h-10 w-10 object-fill"
                                    />
                                </Link>
                                <div className="hidden md:block w-full">
                                    <div className="rounded-full p-3 ring ring-gray-400 h-9 bg-white font-sans text-black flex items-center justify-end w-full">
                                        <input
                                            type="text"
                                            className="h-7 w-full rounded-full focus:outline-0"
                                            placeholder="Search..."></input>
                                        <button className="px-0 md:px-4">
                                            <FaSearch className="h-4 pr-1" />{' '}
                                        </button>
                                    </div>
                                </div>

                                <button className="px-4 md:hidden">
                                    <FaSearch className="h-4 pr-1 text-white" />{' '}
                                </button>
                            </div>
                            {/* Search End */}
                        </div>
                        <div className="w-full col-span-9 sm:col-span-9 md:col-span-5 lg:col-span-6">
                            <ul className="flex items-center justify-content-between gap-1 sm:gap-10 md:gap-8 lg:gap-8 m-0">
                                <li className="hidden md:block">
                                    <Link href="/" className="text-white">
                                        <FaHome className="h-6 w-6 " />{' '}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/polls" className="text-lg text-white">
                                        <FaPoll className="h-6 w-6" />{' '}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/profile" className="text-lg text-white">
                                        <FaUserCircle className="h-6 w-6" />{' '}
                                    </Link>
                                </li>
                                

                                <li>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <a
                                                href="#"
                                                className="text-white relative">
                                                <FaBell className="h-6 w-6" />
                                                <span className="absolute -top-4 -right-3 animate-pulse font-extrabold   bg-clip-text bg-gradient-to-r from-emerald-400 to-pink-600">
                                                    2
                                                </span>
                                            </a>
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
                                            <Dropdown.Item href="#/action-1">
                                                <Link href="/settings">
                                                    <a className="flex items-center">
                                                        <img
                                                            src="/avatar.jpg"
                                                            className="w-10 h-10 rounded-full"
                                                            alt="najmul"
                                                        />

                                                        <div className="ml-2">
                                                            <h6 className="m-0 capitalize">
                                                                najmul hasan
                                                            </h6>
                                                            <p className="m-0 py-.5 text-muted">
                                                                lorem ipsum
                                                                dolor aset
                                                            </p>
                                                            <span className="capitalize">
                                                                20 Minits ago
                                                            </span>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </Dropdown.Item>

                                            <button className="bg-emerald-800 text-white block w-full rounded py-2 text-lg font-medium mt-2">
                                                See All
                                            </button>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className="text-white">
                                    <form className="w-8">
                                        <fieldset>
                                            <select className="border-none bg-inherit">
                                                <option
                                                    value="1"
                                                    className="bg-black text-white">
                                                    En
                                                </option>
                                                <option
                                                    value="2"
                                                    className="bg-black text-white">
                                                    Bn
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
                                                src={profile && _.isNull(profile.avatar) ?  `${process.env.NEXT_PUBLIC_BACKEND_URL}/${profile.avatar}`:'/profile.jpg'}
                                                alt="avatar"
                                                className="w-10 h-10 ring-1 ring-white rounded-full mr-1"
                                            />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                                <Link href="/settings" className="flex items-center font-medium">

                                                    <FaUserCircle className="mr-2" />
                                                    Settings

                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">
                                                <Link href="/people" className="flex items-center font-medium">
                                                    <FaUserCircle className="mr-2" />
                                                    People
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