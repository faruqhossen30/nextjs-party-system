import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { FaFileVideo, FaThumbsUp, FaShareAlt, FaRegCommentDots } from 'react-icons/fa'
import Like from '../Post/Like';


const Post = ({ posts }) => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            {
                posts.map((post, index) => {
                    return (
                        <div className='mb-3 bg-white rounded' key={index}>
                            <div className='flex items-center justify-between p-3'>
                                <div className='flex items-center'>
                                    {/* <a href='#'><img src="/profile.jpg" alt="" className='rounded-full w-12 h-12' /></a> */}
                                    <a href='#'><img src={post.user.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${post.user.avatar}` : '/profile.jpg'} alt="" className='rounded-full w-12 h-12' /></a>
                                    <div className='ml-2 capitalize'>
                                        <a href={`/people/${post.user.id}`}>
                                            <h6 className='leading-none p-0 m-0'> {post.user.name}</h6>
                                        </a>
                                        <a href={`/post/${post.id}`}>
                                            <span className='text-sm text-gray-600'>{moment(post.created_at).fromNow()}</span>
                                        </a>

                                    </div>
                                </div>
                                <div>
                                    ...
                                </div>
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

export default Post