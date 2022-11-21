import moment from 'moment'
import React, { useContext } from 'react'
import { FaFileVideo, FaThumbsUp, FaShareAlt, FaRegCommentDots } from 'react-icons/fa'
import Navnew from '../../../components/Header/Navnew'
import Like from '../../../components/Post/Like'
import axios from '../../../lib/axios'

const EditPost = ({ post }) => {
  return (
    <div>
      <Navnew />


      <div className="grid grid-cols-12 mx-auto">
        <div className="hidden md:block md:col-span-3 "></div>
        <div className="col-span-12 md:col-span-6 px-1 py-2 rounded">
          <div className='mb-3 bg-white rounded'>
            <div className='flex items-center justify-between p-3'>
              <div className='flex items-center'>
                {/* <a href='#'><img src="/profile.jpg" alt="" className='rounded-full w-12 h-12' /></a> */}
                <a href='#'><img src='/profile.jpg' alt="" className='rounded-full w-12 h-12' /></a>
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
            <div className='p-2'>
                <textarea name="" rows="5" className='w-full p-2 border-8'>
                  {post.body}
                </textarea>
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

    </div>
  )
}
export async function getServerSideProps({ query }) {
  console.log('qeuery paramiter', query.id);

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post/${query.id}`)
  const post = await res.data

  console.log(post);

  return {
    props: { post }, // will be passed to the page component as props
  }
}


export default EditPost
