import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment';
import { FaRegEdit, FaUserCircle, FaShareAlt, FaRegCommentDots, FaTrash, FaRegWindowClose, FaRegTrashAlt, FaInfoCircle } from 'react-icons/fa'
import axios from '../../lib/axios';
import Like from '../Post/Like';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dropdown from 'react-bootstrap/Dropdown'
import PostSkeleton from '../Skeleton/PostSkeleton';
import Link from 'next/link';

import GearDropdown from '../Post/GearDropdown';

const HomepageSinglefeed = () => {


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
                    <>
                        <PostSkeleton />
                        <PostSkeleton />
                        <PostSkeleton />
                    </>
                )
            }
            {posts &&
                posts.map((post, index) => {
                    return (
                        <div className='mb-3 bg-white rounded' key={index}>
                            <div className='flex items-center justify-between p-3'>
                                <div className='flex items-center'>
                                    <Link href={`/people/${post.user.id}`}>
                                        <img src={post.user.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${post.user.avatar}` : 'profile.jpg'} alt="" className='rounded-full w-12 h-12' />
                                        </Link>
                                    <div className='ml-2 capitalize'>
                                        <Link href={`/people/${post.user.id}`}>
                                            <h6 className='leading-none p-0 m-0'> {post.user.name}</h6>
                                        </Link>
                                        <Link href={`/post/${post.id}`}>
                                            <span className='text-sm text-gray-600'>{moment(post.created_at).fromNow()}</span>
                                        </Link>

                                    </div>
                                </div>
                                {/* Gear Dropdown Componetnt */}
                                <GearDropdown postUserId={post.user.id} postId={post.id} />
                            </div>
                            <div>
                                <p className='py-2 text-justify text-base p-3'>{post.body}</p>
                                {post.photo &&
                                    <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/photos/post/${post.photo.name}`} alt="one" className='object-contain w-full ' />
                                }

                                {/* <img src="/profile.jpg" alt="" className='object-contain rounded w-full ' /> */}
                            </div>
                            <div className='mt-4'>
                                <hr />
                                <div className='flex justify-between px-3  py-1'>
                                    <Like likes_count={post.likes_count} postid={post.id} />
                                    <div>
                                        <span className='flex items-center'>  <a href='#' className='mr-1'><FaRegCommentDots /> </a>Comments - <span className='text-gray-5000 text-xs'>No Comment</span></span>
                                    </div>
                                    <div>
                                        <div className='flex items-center'> <a href='#' className='mr-1'> <FaShareAlt /></a> Share - 0</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default HomepageSinglefeed