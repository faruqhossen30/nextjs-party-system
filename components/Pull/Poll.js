import React, { useEffect, useState } from 'react'
import axios from '../../lib/axios';

const Poll = ({user}) => {

    const[isLoading, setIsLoading]=useState(true)
    const[pulls, setPulls]=useState([])

    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/polls`)
        .then((res)=>{
            console.log('polls request',res);
        })
        .catch(err=>console.log(err))
    },[]);

    return (
        <div className="bg-white rounded p-4 pb-3">
            <h6>
                <strong>Poll</strong>
            </h6>
            <form action="" method="post">
                <label htmlFor="some" className='flex space-x-2'>
                    <input type="radio" name="option" id="some" />
                    <span>On Test</span>
                </label>

            </form>
        </div>
    )
}

export default Poll