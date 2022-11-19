import React from 'react'
import HomepageProfile from '../HomePage/HomepageProfile'
import HomepageSinglefeed from '../HomePage/HomepageSinglefeed'
import Poll from './Poll'

const PollPage = ({user}) => {
    return (
        <div className="grid grid-cols-12 mx-auto">
            <div className="hidden md:block md:col-span-3">
                <HomepageProfile />
            </div>
            <div className="col-span-12 md:col-span-6 px-1 py-2 rounded">
                <Poll user={user}/>
            </div>
            <div className="hidden md:block md:col-span-3">
                {/* <HomepageBirthday /> */}
                {/* <HomepageFollow /> */}
            </div>
        </div>
    )
}

export default PollPage