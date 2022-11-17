import { FaHeart, FaImage, FaFileVideo, FaList, FaThumbsUp, FaShareAlt, FaRegCommentDots } from 'react-icons/fa'
import HomepageAdvertisement from './HomepageAdvertisement'
import HomepageBirthday from './HomepageBirthday'
import HomepageCreatepost from './HomepageCreatepost'
import HomepageFollow from './HomepageFollow'
import HomepageLike from './HomepageLike'
import HomepageProfile from './HomepageProfile'
import HomepageSinglefeed from './HomepageSinglefeed'
import HomepageStory from './HomepageStory'
import HomepageSuggestiongroup from './HomepageSuggestiongroup'
import 'bootstrap/dist/css/bootstrap.min.css'


const HomePage = () => {
    return (
        <>
            <div className="grid grid-cols-12 mx-auto">
                <div className="hidden md:block md:col-span-3">

                    <HomepageProfile />

                    <HomepageLike />

                    <HomepageAdvertisement />

                    <HomepageSuggestiongroup />

                </div>
                <div className="col-span-12 md:col-span-6 px-1 py-2 rounded">

                    <HomepageCreatepost />

                    <HomepageStory />

                    <HomepageSinglefeed />

                </div>
                <div className="hidden md:block md:col-span-3">

                    <HomepageBirthday />

                    <HomepageFollow />

                </div>
            </div>
        </>
    )
}

export default HomePage
