import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { FaPlusCircle } from 'react-icons/fa'

const singlePeople = ({ people }) => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
            .then((res) => {
                setPosts(res.data.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            {
                people.map((person, index) => {
                    return (
                        <div key={index} className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 bg-white rounded mb-1 shadow-xl">
                            <div className="ml-2 flex items-center py-2">
                                <img
                                    src="/profile.jpg"
                                    alt="profile photo"
                                    className="rounded w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
                                />
                                <div className="ml-2">
                                    <a href='#'>
                                        <h6 className="capitalize text-sm m-0 sm:text-md md:text-xl">
                                            <strong>{person.name}</strong>
                                        </h6>
                                    </a>
                                    <span className="text-muted">{person.occupation}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-evenly mb-1">
                                <h2 className="text-base m-0">
                                    252
                                    <span className="ml-1 text-xs text-muted">Followers</span>
                                </h2>
                                <Button className='' variant="outline-success ">
                                    <div className='flex items-center space-x-1'>
                                        <span><FaPlusCircle /></span>
                                        <span>Follow</span>
                                    </div>
                                </Button>{' '}
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default singlePeople
