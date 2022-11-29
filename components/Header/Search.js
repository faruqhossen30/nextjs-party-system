import Link from 'next/link'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import axios from '../../lib/axios'
import FollowButton from '../Button/FollowButton'

const Search = () => {
    const [search, setSearch] = useState()
    const [users, setUsers] = useState()

    const changeHandaller = (e) => {
        setSearch(e.target.value)
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/people/search/${search}`)
            .then((res) => {
                setUsers(res.data.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="flex items-center flex-grow">
            <Link href="/" className="w-10 mr-4">
                <img
                    src="/logo.jpg"
                    alt=""
                    className="h-10 w-10 object-fill"
                />
            </Link>
            <div className="hidden md:block w-full relative">
                <div className="rounded-full p-3 ring ring-gray-400 h-9 bg-white font-sans text-black flex items-center justify-end w-full">
                    <input
                        type="text"
                        onChange={changeHandaller}
                        className="h-7 w-full focus:outline-0"
                        placeholder="Search..."></input>
                    <button className="px-0 md:px-4">
                        <FaSearch className="h-4 pr-1" />{' '}
                    </button>
                </div>
                {search && users &&
                    users.map((person, index) => {
                        return (
                            <div className='absolute bg-white shadow-xl mt-2 p-3 rounded-lg w-full h-72 overflow-y-scroll'>
                                <div className='flex items-center justify-between mb-2'>
                                    <div className='flex items-center'>
                                        <img src={person.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${person.avatar}` : 'profile.jpg'} alt="" className='rounded-full w-12 h-12' />
                                        <Link href={`/people/${person.id}`} className=''>
                                            <h6 className='ml-4 mb-0 capitalize text-base text-gray-500 leading-none'>{person.name}</h6>
                                            <span className='ml-4 capitalize text-xs text-gray-400 mb-0'>{person.address}</span>
                                        </Link>
                                    </div>
                                    <FollowButton />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <button className="px-4 md:hidden">
                <FaSearch className="h-4 pr-1 text-white" />
            </button>
        </div>
    )
}

export default Search