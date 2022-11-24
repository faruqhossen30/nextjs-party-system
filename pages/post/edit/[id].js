
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { FaFileVideo, FaThumbsUp, FaShareAlt, FaRegCommentDots } from 'react-icons/fa'
import Navnew from '../../../components/Header/Navnew'
import Like from '../../../components/Post/Like'
import axios from '../../../lib/axios'
import { changeHandaller } from '../../../handaller/Handaller'
import Update from '../../../components/Post/Update'

const EditPost = ({ post }) => {

  return (
    <div>
      <Navnew />
      <Update post={post} />

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
