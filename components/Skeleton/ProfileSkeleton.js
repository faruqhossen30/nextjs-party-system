import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProfileSkeleton = () => {
    return (
        <div className='bg-white p-2 mb-3 relative'>
            <div className=' flex justify-center'>
                <div>
                    <Skeleton height={80} width={320}/>
                    <div className='absolute top-12' style={{ left: '35%'}}>
                        <Skeleton circle height={100} width={100} />
                    </div>
                </div>
            </div>
            <div className=' mt-10'>
                <Skeleton height={50} style={{ marginTop: 22, marginBottom: 10 }} />
            </div>
            <Skeleton height={30} count={2} style={{ marginTop: 4 }} />
            <div className='flex justify-center'>
                <Skeleton circle height={50} width={50} />
                <Skeleton circle height={50} width={50} />
                <Skeleton circle height={50} width={50} />
                <Skeleton circle height={50} width={50} />
                <Skeleton circle height={50} width={50} />
            </div>
            <div className='text-center mt-2'>
                <Skeleton height={40} width={100} count={1} style={{ marginTop: 4 }} />
            </div>
        </div>
    )
}

export default ProfileSkeleton
