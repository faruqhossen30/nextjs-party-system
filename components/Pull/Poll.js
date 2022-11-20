import React, { useEffect, useRef, useState } from 'react'
import { FaPoll } from 'react-icons/fa';
import axios from '../../lib/axios';
import PostSkeleton from '../Skeleton/PostSkeleton';

const Poll = ({ user }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [polls, setPolls] = useState([])

    const pollAttendanceSubmitHandaller = (val1,val2)=>{
        console.log('val1', val1)
        console.log('val2', val2);
    }

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/polls`)
            .then((res) => {
                setPolls(res.data.data)
                setIsLoading(false)
                console.log('polls request', res);
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <>
            {isLoading && <PostSkeleton />}
            {polls &&
                polls.map((poll, index) => {
                    return (
                        <div className="bg-white rounded p-4 pb-3 mb-2" key={index}>
                            <h6 className='flex space-x-2'>
                                <FaPoll />
                                <span> {poll.title}</span>
                            </h6>
                            <form onSubmit={()=>pollAttendanceSubmitHandaller(poll.id)}>
                                <input type="hidden" value={poll.id}  />
                                {poll.options.map((option, index) => {
                                    return (
                                        <label htmlFor={`optionFor${option.id}`} className='flex space-x-2 py-1' key={index}>
                                            <input type="checkbox" name="poll_option_id" value={option.id} id={`optionFor${option.id}`} />
                                            <span>{option.option}</span>
                                        </label>
                                    )
                                })}

                            </form>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Poll