import React from 'react'

const HomepageBirthday = () => {
    return (
        <div>
            <div className='pr-4 pt-2 bg-white m-2 rounded p-4'>
                <div className='flex justify-between pb-4'>
                    <h6>
                        <strong>Today Birthdays</strong>
                    </h6>
                    <h6>
                        <a href='#' className='underline'>See All</a>
                    </h6>
                </div>
                <div>
                    <a href='#' className='flex items-center mb-6'>
                        <div>
                            <img src="profile.jpg" alt="" className='rounded-full w-12 h-12' />
                        </div>
                        <div className='ml-4 capitalize'>
                            <h6><strong>najmul hasan</strong></h6>
                            <span>10 minits ago</span>
                        </div>
                    </a>
                    <a href='#' className='flex items-center mb-6'>
                        <div>
                            <img src="profile.jpg" alt="" className='rounded-full w-12 h-12' />
                        </div>
                        <div className='ml-4 capitalize'>
                            <h6><strong>najmul hasan</strong></h6>
                            <span>10 minits ago</span>
                        </div>
                    </a>
                    <a href='#' className='flex items-center'>
                        <div>
                            <img src="profile.jpg" alt="" className='rounded-full w-12 h-12' />
                        </div>
                        <div className='ml-4 capitalize'>
                            <h6><strong>najmul hasan</strong></h6>
                            <span>10 minits ago</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomepageBirthday