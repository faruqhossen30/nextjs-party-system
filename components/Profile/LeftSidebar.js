import Link from 'next/link';
import React from 'react'
import { FaImage, FaUserAlt, FaEnvelope, FaMapPin } from 'react-icons/fa';

const LeftSidebar = () => {
    return (
        <div className='col-span-4 bg-white m-2 rounded-md'>
            <div className=' border-b shadow-sm bg-gray-100'>
                <h6 className='p-3 m-0'>Profile Information</h6>
            </div>
            <div>
                <Link href="/profile/photo" className='pl-1 border-b space-x-2 flex items-center p-2 transition-all text-gray-300 hover:bg-gray-300  cursor-pointer'>
                    <FaImage className='mr-1 ml-2 text-gray-500' />
                    <span className='text-gray-600'>Photo</span>
               </Link>
                <Link href="/profile/name" className='pl-1  border-b space-x-2 flex items-center p-2 transition-all text-gray-300 hover:bg-gray-300  cursor-pointer'>
                    <FaUserAlt className='mr-1 ml-2 text-gray-500' />
                    <span className='text-gray-600'>Name</span>
               </Link>
                <Link href="/profile/contact" className='pl-1  border-b space-x-2 flex items-center p-2 transition-all text-gray-300 hover:bg-gray-300  cursor-pointer'>
                    <FaEnvelope className='mr-1 ml-2 text-gray-500' />
                    <span className='text-gray-600'>Contact</span>
               </Link>
                <Link href="/profile/address" className='pl-1  border-b space-x-2 flex items-center p-2 transition-all text-gray-300 hover:bg-gray-300  cursor-pointer'>
                    <FaMapPin className='mr-1 ml-2 text-gray-500' />
                    <span className='text-gray-600'>Address</span>
               </Link>
                <Link href="/profile/social" className='pl-1  border-b space-x-2 flex items-center p-2 transition-all text-gray-300 hover:bg-gray-300  cursor-pointer'>
                    <FaMapPin className='mr-1 ml-2 text-gray-500' />
                    <span className='text-gray-600'>Social</span>
               </Link>
                <Link href="/profile/aditional_info" className='pl-1  border-b space-x-2 flex items-center p-2 transition-all text-gray-300 hover:bg-gray-300  cursor-pointer'>
                    <FaMapPin className='mr-1 ml-2 text-gray-500' />
                    <span className='text-gray-600'>Aditional Information</span>
               </Link>
            </div>
        </div>
    )
}

export default LeftSidebar
