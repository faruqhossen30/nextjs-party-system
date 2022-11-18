
import { createRef, useState } from 'react';
import { FaImage, FaFileVideo, FaList } from 'react-icons/fa'
import axios from '../../lib/axios';

const HomepageCreatepost = () => {
    // This is working single photo
    const textarea = createRef();
    const [photo, setPhoto] = useState();

    const changePhotoHandaller = (file) => {
        setPhoto(file[0]);
    }

    async function createPost(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('body', textarea.current.value)
        formData.append('file', photo)
        // formData.append('user_id', 2);

        await axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/user/post/store`, formData)
            .then(response => {
                console.log(response);
                window.location.reload();
            })

    }

    return (
        <form
            method="POST"
            onSubmit={createPost}
            className="bg-white rounded p-4" encType='multipart/form-data' >
            <div className="bg-white rounded p-2 pb-3">
                <h6>
                    <strong>Create New Post</strong>
                </h6>
                <div>
                    <textarea
                        name="body"
                        id="message"
                        ref={textarea}
                        rows="3"
                        className="block p-2.5 w-full text-sm text-gray-900 border-emerald-700 rounded-lg border border-emerald-700 focus:ring-emerald-500 focus:border-emerald-700"
                        placeholder="Write something here..."></textarea>
                </div>
                <div className="flex items-center justify-between  px-3">
                    {/* Working */}
                    <input name='file' type='file' multiple onChange={(e) => changePhotoHandaller(e.target.files)} />

                    <div className="flex items-center space-x-1 cursor-pointer">

                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <FaList />
                        <span>Pull</span>
                    </div>
                    <div>
                        <button // onClick={createPost} type="submit"
                            className="bg-emerald-700 text-white font-bold px-3 py-1 rounded-lg">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default HomepageCreatepost