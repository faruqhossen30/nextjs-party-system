import Link from 'next/link'
import React, { useState } from 'react'
import moment from 'moment'
import Like from './Like'
import { FaRegCommentDots, FaShareAlt } from 'react-icons/fa'
import { changeHandaller } from '../../handaller/Handaller'
import axios from '../../lib/axios'

const Update = ({ post }) => {
    const [body, setBody] = useState(post.body)
    const updateHandaller = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('body', body)
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/post/update/${post.id}`, formData)
            .then(() => {
                console.log('successfully update');
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="grid grid-cols-12 mx-auto">
            <div className="hidden md:block md:col-span-3 "></div>
            <div className="col-span-12 md:col-span-6 px-1 py-2 rounded">
                <div className='mb-3 bg-white rounded'>
                    <div className='flex items-center justify-between p-3'>
                        <div className='flex items-center'>
                            <Link href={`/people/${post.user.id}`}><img src={post.user.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${post.user.avatar}` : 'profile.jpg'} alt="" className='rounded-full w-12 h-12' /></Link>
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
                    <form onSubmit={updateHandaller}>
                        <div className='p-2'>
                            <textarea defaultValue={body} onChange={(e) => changeHandaller(setBody, e.target.value)} name="" rows="5" className='w-full p-2 border-2'>

                            </textarea>
                            {post.photo &&
                                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/photos/post/${post.photo.name}`} alt="one" className='object-contain w-full ' />
                            }
                            {/* <img src="/profile.jpg" alt="" className='object-contain rounded w-full ' /> */}
                        </div>
                        <div className='pr-2 text-right'>
                            <button
                                className="bg-emerald-700 text-white font-bold px-3 py-1 rounded-md">
                                Update
                            </button>
                        </div>
                    </form>
                    <div className='mt-2'>
                        <hr />
                        <div className='flex justify-between px-3  py-1'>
                            <Like likes_count={post.likes_count} postid={post.id} />
                            <div>
                                <span className='flex items-center'>  <a href='#' className='mr-1'><FaRegCommentDots /> </a>comments | 1200</span>
                            </div>
                            <div>
                                <div className='flex items-center'> <a href='#' className='mr-1'> <FaShareAlt /></a> share | 1200</div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="hidden md:block md:col-span-3 "></div>
        </div>
    )
}

export default Update