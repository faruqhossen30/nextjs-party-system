import React from 'react'
import { FaImage, FaFileVideo, FaList } from 'react-icons/fa'

const HomepageCreatepost = () => {
    return (
        <div>
            <div className='bg-white rounded p-4'>
                <h6>
                    <strong>Create New Post</strong>
                </h6>
                <div>
                    <textarea
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write something here..."></textarea>
                </div>
                <div className="flex items-center justify-between py-2 px-3">
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <FaImage />
                        <span>Photo</span>
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <FaFileVideo />
                        <span>Video</span>
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <FaList />
                        <span>Pull</span>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-purple-600 text-white font-bold px-3 py-1 rounded-lg">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomepageCreatepost