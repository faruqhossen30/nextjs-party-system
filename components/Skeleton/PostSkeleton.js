import React from 'react'
import Skeleton from 'react-loading-skeleton'

const PostSkeleton = () => {
    return (
        <div className='bg-white p-2 mb-3'>
            <div className='flex justify-between'>
                <div>
                    <Skeleton height={60} width={60} />
                </div>
            </div>
            <Skeleton height={25} style={{ marginTop: 22, marginBottom:10 }} />
            <Skeleton height={15} count={3} style={{ marginTop: 4 }} />
        </div>
    )
}

export default PostSkeleton