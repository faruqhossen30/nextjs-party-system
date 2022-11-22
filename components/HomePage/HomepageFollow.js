import axios from '../../lib/axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import FollowButton from '../Button/FollowButton';

const HomepageFollow = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/follow/suggestion`)
            .then((res) => {
                setPeople(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(people);
    return (
        <div>
            <div className='pr-4 bg-white m-2 rounded p-4'>
                <h6>
                    <strong>Follow Now </strong>
                </h6>
                <div className='mt-6'>
                    {people && people.length > 0 &&
                        people.map((user, index) => {
                            return (
                                <div className='flex items-center justify-between mb-4' key={index}>
                                    <div className='flex items-center'>
                                        <img src={user.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${user.avatar}` : '/profile.jpg'} alt="" className='rounded-full w-12 h-12' />
                                        <Link href="#">
                                            <h6 className='ml-2 capitalize text-base'>{user.name}</h6>
                                        </Link>
                                    </div>
                                    <FollowButton followerid={user.id} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HomepageFollow