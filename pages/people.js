
import SinglePeople from '../components/SinglePeople'
import Navnew from '../components/Header/Navnew'
import Breadcum from '../components/Header/Breadcum'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import axios from '../lib/axios'
import { FaSearch } from 'react-icons/fa'

const people = ({ people }) => {
    // console.log(people);
    return (
        <div>
            <Navnew />

            <div className='flex flex-grow items-center p-2 m-2 bg-white  rounded-md'>
                <div className=' w-48'>
                    <h5 className='p-0 m-0  font-semibold'>Search People </h5>
                </div>
                <form className='pr-2 w-full'>
                    <div className="rounded-full p-3 ring-2 ring-emerald-600  h-9 bg-white font-sans text-black flex items-center justify-end ">
                        <input
                            type="text"
                            className="h-7 w-full  rounded-full focus:outline-0"
                            placeholder="Search..."></input>
                        <button className="px-0 md:px-4">
                            <FaSearch className="h-4 pr-1" />
                        </button>
                    </div>
                </form>
            </div>

            <div className="grid grid-cols-12 p-2 gap-3">
                <SinglePeople people={people} />
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/people`)
        const people = await res.data.data
        return {
            props: { people }, // will be passed to the page component as props
        }

    } catch (err) {
        console.log(err);
    }


}


export default people
