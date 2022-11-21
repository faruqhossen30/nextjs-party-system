import React, { useState } from 'react'
import { FaCheckCircle, FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import axios from '../../lib/axios'

const FollowButton = ({followerid}) => {

    const[isFollow, setIsFollow] = useState(false)

    const followHandaller = ()=>{
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/follow/${followerid}`)
        .then((res)=>{
            setIsFollow(!isFollow)
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <button onClick={followHandaller} className="text-sm text-white rounded-sm bg-emerald-600 px-2 py-1 ring-emerald-600 hover:bg-emerald-800 hover:ring-indigo-700">
            <div className='flex items-center space-x-1'>
                <span> {isFollow ? <FaCheckCircle /> : <FaPlusCircle />} </span>
                <span>{isFollow ? 'Folloing':'Follow'}</span>
            </div>
        </button>
    )
}

export default FollowButton