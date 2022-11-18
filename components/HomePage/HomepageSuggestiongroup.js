import Link from 'next/link'
import React from 'react'

const HomepageSuggestiongroup = () => {
    return (
        <div>
            <div className='pr-4 p-2 bg-white m-2 rounded'>
                <h6>
                    <strong>Suggested Groups</strong>
                </h6>
                <div className='mt-4'>
                    <Link href='#' className='flex items-center mb-6'>
                        <div>
                            <img src="profile.jpg" alt="" className='rounded w-16 h-16' />
                        </div>
                        <div className='ml-4 capitalize'>
                            <h6><strong>Graphic Design</strong></h6>
                            <span>1215 Members</span> <br />
                            {/* <Link href="#">Join Community</Link> */}
                        </div>
                    </Link>
                    <Link href='#' className='flex items-center mb-6'>
                        <div>
                            <img src="profile.jpg" alt="" className='rounded w-16 h-16' />
                        </div>
                        <div className='ml-4 capitalize'>
                            <h6><strong>Graphic Design</strong></h6>
                            <span>1215 Members</span> <br />
                            {/* <Link href="#">Join Community</Link> */}
                        </div>
                    </Link>
                    <Link href='#' className='flex items-center mb-6'>
                        <div>
                            <img src="profile.jpg" alt="" className='rounded w-16 h-16' />
                        </div>
                        <div className='ml-4 capitalize'>
                            <h6><strong>Graphic Design</strong></h6>
                            <span>1215 Members</span> <br />
                            {/* <Link href="#">Join Community</Link> */}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomepageSuggestiongroup