import React from 'react'
import Skeleton from 'react-loading-skeleton'

const PeopleSkeleton = () => {
    return (
        <div className='col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 bg-white rounded-sm mb-1 shadow-xl p-2'>
            <div className=' flex items-center justify-around '>
                <div>
                    <Skeleton height={100} width={100} />
                </div>
                <div className='pl-2'>
                    <Skeleton height={20} width={200} />
                    <Skeleton height={20} width={200} />
                </div>
            </div>
            <hr />
            <div>
                <Skeleton height={20} width={300} />
            </div>
        </div>
    )
}

export default PeopleSkeleton
