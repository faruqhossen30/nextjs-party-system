import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { FaPlusCircle } from 'react-icons/fa'
import FollowButton from '../components/Button/FollowButton'
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton'
import PeopleSkeleton from './Skeleton/PeopleSkeleton';

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
            {isLoading && 
               (
                <PeopleSkeleton num={4} />
               )
            }
            {people && (
                people.map((person, index) => {
                    return (
                        <div key={index} className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 bg-white rounded-sm mb-1 shadow-xl">
                            <div className="m-2 flex items-center py-2 border-b-2">
                                <img
                                    src="/profile.jpg"
                                    alt="profile photo"
                                    className="rounded-md w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24"
                                />
                                <div className="ml-2">
                                    <Link href={`/people/${person.id}`}>
                                        <h6 className="capitalize text-slate-700 m-0 sm:text-sm md:text-lg">
                                            {person.name}
                                        </h6>
                                    </Link>
                                    <span className="text-muted">{person.occupation}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-2">
                                <h2 className="text-base m-0">
                                    {person.followers_count}
                                    <span className="ml-1 text-xs text-muted">Followers</span>
                                </h2>
                                <FollowButton followerid={person.id} />
                            </div>
                        </div>
                    )
                })
            )}
        </>
    )
}

export default singlePeople
