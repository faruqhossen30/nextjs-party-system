import React from 'react'
import Skeleton from 'react-loading-skeleton'

const FollowSkeleton = () => {
    return (
        <div className='bg-white p-2 mb-3'>
            <div className='flex items-center justify-between'>
                <Skeleton circle height={60} width={60} />
                <Skeleton height={30} width={100} />
                <Skeleton height={30} width={100} />
            </div>
            <div className='flex items-center justify-between'>
                <Skeleton circle height={60} width={60} />
                <Skeleton height={30} width={100} />
                <Skeleton height={30} width={100} />
            </div>
            <div className='flex items-center justify-between'>
                <Skeleton circle height={60} width={60} />
                <Skeleton height={30} width={100} />
                <Skeleton height={30} width={100} />
            </div>
        </div>
    )
}

export default FollowSkeleton
