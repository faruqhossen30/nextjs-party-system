import React, { useEffect, useRef, useState } from 'react'
import { FaPoll } from 'react-icons/fa';
import axios from '../../lib/axios';
import PostSkeleton from '../Skeleton/PostSkeleton';

const Poll = ({ user }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [polls, setPolls] = useState([])

    const pollAttendanceSubmitHandaller = (val1, val2) => {
        console.log('val1', val1)
        console.log('val2', val2);
    }
    const changePoll = (e) => {
        console.log('poll_option_id', e.target.value);
        console.log('poll_id', e.target.getAttribute('data-poll'));
        let poll_id = e.target.getAttribute('data-poll');
        let poll_option_id = e.target.value;

        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/poll/option/attendance/${poll_id}`,{
            poll_option_id: poll_option_id
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log('this is error', err);
                setError(err.response.data.message)
            })
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
                            <form onSubmit={() => pollAttendanceSubmitHandaller(poll.id)}>
                                <input type="hidden" value={poll.id} />
                                {poll.options.map((option, index) => {
                                    return (
                                        <label htmlFor={`optionFor${option.id}`} className='flex space-x-2 py-1' key={index}>
                                            <input type="radio" name="poll_option_id" data-poll={poll.id} onChange={changePoll} value={option.id} id={`optionFor${option.id}`} />
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