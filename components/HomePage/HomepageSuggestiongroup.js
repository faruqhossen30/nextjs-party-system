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
                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-16 h-16' />
                        </div>
                        <div className='ml-4 capitalize'>
                            <h6><strong>Graphic Design</strong></h6>
                            <span>1215 Members</span> <br />
                            {/* <Link href="#">Join Community</Link> */}
                        </div>
                    </Link>
                    <Link href='#' className='flex items-center mb-6'>
                        <div>
                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-16 h-16' />
                        </div>
                        <div className='ml-4 capitalize'>
                            <h6><strong>Graphic Design</strong></h6>
                            <span>1215 Members</span> <br />
                            {/* <Link href="#">Join Community</Link> */}
                        </div>
                    </Link>
                    <Link href='#' className='flex items-center mb-6'>
                        <div>
                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-16 h-16' />
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